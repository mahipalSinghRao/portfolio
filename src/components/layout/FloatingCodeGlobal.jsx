import { motion } from "framer-motion";

const floatingCode = [
    "const ui = buildPremiumExperience();",
    "useMotionValue(scrollYProgress)",
    "git push origin main",
    "npm run deploy:prod",
    "export default Portfolio",
    "pnpm lint && pnpm test",
    "useEffect(() => optimizeUI(), [])",
    "app.use('/api/v1', router)",
    "await db.collection('users').find()",
    "docker build -t app:latest .",
    "CI/CD pipeline triggered 🚀",
    "const ui = buildPremiumExperience();",
    "useMotionValue(scrollYProgress)",
    "git push origin main",
    "npm run deploy:prod",
    "export default Portfolio",
    "pnpm lint && pnpm test",

    // 🔹 React / Frontend
    "useEffect(() => optimizeUI(), [])",
    "const state = useGlobalStore()",
    "<Motion.div animate={spring} />",
    "lazy(() => import('./GameEngine'))",

    // 🔹 Backend / API
    "app.use('/api/v1', router)",
    "await db.collection('users').find()",
    "res.status(200).json({ success: true })",
    "JWT.verify(token, SECRET_KEY)",

    // 🔹 DevOps / Tools
    "docker build -t app:latest .",
    "vercel --prod",
    "nginx reload && pm2 restart all",
    "CI/CD pipeline triggered 🚀",

    // 🔹 Game Dev (fits your projects)
    "engine.startGameLoop()",
    "player.updatePosition(deltaTime)",
    "spawnObstacle(randomX)",
    "score += multiplier",

    // 🔹 Terminal / Hacker vibe
    "ssh root@server",
    "chmod +x deploy.sh",
    "tail -f logs/app.log",
    "echo 'Hello Developer 👨‍💻'",

    // 🔹 Fun + Personality
    "while(!success) { tryAgain(); }",
    "console.log('It works! 🎉')",
    "fixBug(); // introduced 2 more 😅",
    "commit -m 'final final v2 REAL final'",
];

function FloatingCodeGlobal() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
            {floatingCode.map((line, index) => (
                <motion.span
                    key={index} // ⚠️ important: unique key
                    className="floating-code absolute text-xs font-mono text-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                        y: [0, -80 - index * 10, -160 - index * 20],
                        x: [0, index % 2 === 0 ? 40 : -40, index % 2 === 0 ? 80 : -80],
                    }}
                    transition={{
                        duration: 12 + index * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.6,
                    }}
                    style={{
                        left: `${Math.random() * 90}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    {line}
                </motion.span>
            ))}
        </div>
    );
}

export default FloatingCodeGlobal;