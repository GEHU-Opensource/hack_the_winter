import { useState, useEffect, useRef } from "react";

interface Bird {
	id: number;
	x: number;
	y: number;
	speed: number;
	type: string;
	alive: boolean;
}

const birdTypes = [
	"red-bird.svg",
	"blue-bird.svg",
	"yellow-bird.svg",
	"egg-bird.svg",
];

export default function BirdHuntingGame() {
	const [birds, setBirds] = useState<Bird[]>([]);
	const [score, setScore] = useState(0);
	const [gameRunning, setGameRunning] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
	const gameAreaRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number>(0);

	const GAME_WIDTH = 1024; // max-w-4xl
	const GAME_HEIGHT = 384; // h-96
	const BIRD_SIZE = 40;

	const startGame = () => {
		setGameRunning(true);
		setGameOver(false);
		setScore(0);
		setBirds([]);
		setTimeLeft(120);
	};

	const stopGame = () => {
		setGameRunning(false);
		setGameOver(true);
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
		}
	};

	const spawnBird = () => {
		const newBird: Bird = {
			id: Date.now() + Math.random(),
			x: -40,
			y: Math.random() * 300 + 50,
			speed: 2 + Math.random() * 3,
			type: birdTypes[Math.floor(Math.random() * birdTypes.length)],
			alive: true,
		};
		setBirds((prev) => [...prev, newBird]);
	};

	const updateGame = () => {
		setBirds((prev) =>
			prev
				.map((bird) => ({
					...bird,
					x: bird.x + bird.speed,
				}))
				.filter((bird) => bird.x < GAME_WIDTH + 40 && bird.alive),
		);

		if (gameRunning && Math.random() < 0.02) {
			spawnBird();
		}

		if (gameRunning) {
			animationRef.current = requestAnimationFrame(updateGame);
		}
	};

	const handleBirdClick = (birdId: number) => {
		setBirds((prev) =>
			prev.map((bird) =>
				bird.id === birdId ? { ...bird, alive: false } : bird,
			),
		);
		setScore((prev) => prev + 10);
	};

	// Timer effect
	useEffect(() => {
		let timerInterval: NodeJS.Timeout;

		if (gameRunning && timeLeft > 0) {
			timerInterval = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						setGameRunning(false);
						setGameOver(true);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		}

		return () => {
			if (timerInterval) {
				clearInterval(timerInterval);
			}
		};
	}, [gameRunning, timeLeft]);

	// Game animation effect
	useEffect(() => {
		if (gameRunning) {
			animationRef.current = requestAnimationFrame(updateGame);
		}
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [gameRunning]);

	return (
		<div className="bg-green-900/20 rounded-lg p-6 border-2 border-green-500/50">
			<div className="text-center mb-2">
				<h3 className="text-2xl font-bold text-green-300 mb-8">
					Bird Hunting Game
				</h3>
				<div className="flex justify-between items-center mb-2">
					<span className="text-white font-bold font-angry">
						Score: {score}
					</span>
					<span className="text-white font-bold font-angry">
						Time: {Math.floor(timeLeft / 60)}:
						{(timeLeft % 60).toString().padStart(2, "0")}
					</span>
				</div>

				<div className="flex justify-center mb-4">
					{!gameRunning && !gameOver && (
						<button
							type="button"
							onClick={startGame}
							className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-angry font-bold"
						>
							Start Game
						</button>
					)}
					{gameRunning && (
						<button
							type="button"
							onClick={stopGame}
							className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-angry font-bold"
						>
							Stop Game
						</button>
					)}
					{gameOver && (
						<button
							type="button"
							onClick={startGame}
							className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-angry font-bold"
						>
							Play Again
						</button>
					)}
				</div>
			</div>

			<div
				ref={gameAreaRef}
				className="relative mx-auto border-2 border-green-400/50 rounded-lg overflow-hidden w-full max-w-4xl h-96 bg-cover bg-center"
				style={{
					backgroundImage: "url(/game/game_stage.png)",
				}}
			>
				{birds.map(
					(bird) =>
						bird.alive && (
							// biome-ignore lint/a11y/useKeyWithClickEvents: click based game
							<img
								key={bird.id}
								src={`/game/${bird.type}`}
								alt="Bird"
								className="absolute cursor-pointer hover:scale-110 transition-transform w-10 h-10"
								style={{
									left: `${bird.x}px`,
									top: `${bird.y}px`,
								}}
								onClick={() => handleBirdClick(bird.id)}
							/>
						),
				)}

				{!gameRunning && !gameOver && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/50">
						<div className="text-center text-white">
							<p className="text-xl font-bold mb-2">
								Click Start to Hunt Birds!
							</p>
							<p className="text-sm">
								Click on the birds as they fly across the stage
							</p>
						</div>
					</div>
				)}

				{gameOver && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/50">
						<div className="text-center text-white">
							<p className="text-2xl font-bold mb-2">Time's Up!</p>
							<p className="text-lg mb-2">Final Score: {score}</p>
							<p className="text-sm">
								Great hunting, pig! You got {Math.floor(score / 10)} birds!
							</p>
						</div>
					</div>
				)}
			</div>

			<div className="text-center mt-4">
				<p className="text-sm text-green-200">
					Click on the birds as they fly across the stage to hunt them down!
				</p>
			</div>
		</div>
	);
}
