import 'dart:js_interop';

import 'package:certificate_viewer/design.dart';
import 'package:flutter/material.dart';
import 'package:pdf/pdf.dart';
import 'package:printing/printing.dart';

@JS()
external String? get name;

@JS()
external String? get college;

@JS()
external String? get team;

@JS()
external bool? get finalists;

@JS()
external int? get position;

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Certificate",
      home: Scaffold(
        body: PdfPreview(
          build: (format) => Design.build(
            format,
            name ?? "name",
            college ?? "college",
            team ?? "team",
            finalists ?? false,
            position,
          ),
          initialPageFormat: PdfPageFormat(
            297 * PdfPageFormat.mm,
            210 * PdfPageFormat.mm,
          ),
          canChangeOrientation: false,
          canChangePageFormat: false,
          dynamicLayout: true,
          shouldRepaint: true,
          // previewPageMargin: EdgeInsets.zero,
          canDebug: false,
          padding: EdgeInsets.zero,
          pdfFileName: "$name $team certificate.pdf",
          maxPageWidth: 1000,
        ),
      ),
    );
  }
}
