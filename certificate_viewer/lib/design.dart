import 'dart:typed_data';
import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart';

class Design {
  // colors
  static const PdfColor primaryColor = PdfColor(1, 1, 1);

  // svg
  static late final String orgLogo, clubLogo;

  // font
  static late final Font angryFont, angryItalicFont, lazydogFont;

  // signatures
  static late final MemoryImage coordinatorSignature,
      hodSignature,
      directorSignature;

  static var _initialized = false;

  const Design();

  static Future<void> initialize() async {
    if (Design._initialized) return;

    // load svg
    orgLogo = await rootBundle.loadString('assets/icons/gehu_btl_mono.svg');
    clubLogo = await rootBundle.loadString('assets/icons/wecode_white.svg');

    // load font
    angryFont = Font.ttf(await rootBundle.load('assets/fonts/FEASFBRG.TTF'));
    angryItalicFont = Font.ttf(
      await rootBundle.load('assets/fonts/FEASFBI_.TTF'),
    );
    lazydogFont = Font.ttf(await rootBundle.load('assets/fonts/lazy_dog.ttf'));

    // load signatures
    coordinatorSignature = MemoryImage(
      (await rootBundle.load('assets/images/cc.png')).buffer.asUint8List(),
    );
    hodSignature = MemoryImage(
      (await rootBundle.load('assets/images/hod.png')).buffer.asUint8List(),
    );
    directorSignature = MemoryImage(
      (await rootBundle.load('assets/images/dir.png')).buffer.asUint8List(),
    );

    Design._initialized = true;
  }

  static Future<Uint8List> build(
    PdfPageFormat format,
    String name,
    String college,
    String team,
    bool finalists,
    int? position,
  ) async {
    await Design.initialize();

    final pdf = Document();
    // add pages
    pdf.addPage(
      Page(
        pageFormat: format,
        margin: const EdgeInsets.all(0),
        build: (context) {
          return Container(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                colors: finalists
                    ? position != null
                          ? [
                              PdfColor.fromHex("#14532d"),
                              PdfColor.fromHex("#052e16"),
                              // PdfColor.fromHex("#000000"),
                            ]
                          : [
                              PdfColor.fromHex("#1e3a8a"),
                              PdfColor.fromHex("#172554"),
                            ]
                    : [
                        PdfColor.fromHex("#7f1d1d"),
                        PdfColor.fromHex("#450a0a"),
                        // PdfColor.fromHex("#000000"),
                      ],
              ),
            ),
            padding: const EdgeInsets.all(10),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SvgImage(
                      svg: orgLogo,
                      height: 60,
                      width: 200,
                      fit: BoxFit.fitHeight,
                    ),
                    SizedBox(width: 20),
                    SvgImage(
                      svg: clubLogo,
                      height: 60,
                      width: 60,
                      fit: BoxFit.fitHeight,
                    ),
                  ],
                ),
                Spacer(flex: 1),
                Text(
                  "HACK THE WINTER",
                  style: TextStyle(
                    fontNormal: angryFont,
                    fontItalic: angryItalicFont,
                    fontStyle: .italic,
                    fontSize: 75,
                    color: PdfColors.white,
                  ),
                ),
                Text(
                  "THE SECOND WAVE",
                  style: TextStyle(
                    fontNormal: angryFont,
                    fontItalic: angryItalicFont,
                    fontStyle: .italic,
                    fontSize: 55,
                    color: PdfColors.white,
                  ),
                ),
                Spacer(flex: 1),
                Text(
                  finalists
                      ? (position != null
                            ? "Certificate of Achievement"
                            : "Certificate of Appreciation")
                      : "Certificate of Participation",
                  style: TextStyle(fontSize: 25, color: PdfColors.white),
                ),
                Spacer(flex: 2),
                Text(
                  "This is to certify that",
                  style: TextStyle(fontSize: 20, color: PdfColors.white),
                ),
                Spacer(flex: 1),
                Text(
                  name,
                  textAlign: .center,
                  style: TextStyle(
                    fontSize: 40,
                    font: lazydogFont,
                    color: PdfColors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  "Of",
                  style: TextStyle(fontSize: 20, color: PdfColors.white),
                ),
                Text(
                  college,
                  textAlign: .center,
                  style: TextStyle(
                    fontSize: 25,
                    font: lazydogFont,
                    color: PdfColors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Spacer(flex: 1),
                Text(
                  "has successfully ${position != null ? "achieved \"$position${position == 1
                            ? "st"
                            : position == 2
                            ? "nd"
                            : position == 3
                            ? "rd"
                            : "th"} position\"" : "participated"} in Hack The Winter - The Second Wave ${finalists ? '' : '(Online Round)'} organized by WeCode Club, GEHU Bhimtal from 25th December 2025 to ${finalists ? "23rd" : "10th"} January 2026.",
                  style: TextStyle(fontSize: 18, color: PdfColors.white),
                  textAlign: .center,
                ),
                Spacer(flex: 2),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Spacer(flex: 2),
                    Column(
                      children: [
                        Image(coordinatorSignature, width: 100, height: 50),
                        Text(
                          "Coordinator\nWeCode Club",
                          textAlign: .center,
                          style: TextStyle(
                            fontSize: 12,
                            color: PdfColors.white,
                          ),
                        ),
                      ],
                    ),
                    Spacer(flex: 1),
                    Column(
                      children: [
                        Image(hodSignature, width: 100, height: 50),
                        Text(
                          "HOD\nCSE Department",
                          textAlign: .center,
                          style: TextStyle(
                            fontSize: 12,
                            color: PdfColors.white,
                          ),
                        ),
                      ],
                    ),
                    Spacer(flex: 1),
                    Column(
                      children: [
                        Image(directorSignature, width: 100, height: 50),
                        Text(
                          "Director\nGEHU Bhimtal",
                          textAlign: .center,
                          style: TextStyle(
                            fontSize: 12,
                            color: PdfColors.white,
                          ),
                        ),
                      ],
                    ),
                    Spacer(flex: 2),
                  ],
                ),
                Spacer(flex: 1),
              ],
            ),
          );
        },
      ),
    );

    return pdf.save();
  }
}
