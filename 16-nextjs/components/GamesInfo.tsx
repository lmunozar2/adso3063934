import { PrismaClient } from '../app/generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'

const prisma = new PrismaClient({
    adapter: new PrismaNeon({
        connectionString: process.env.DATABASE_URL!
    })
})

export default async function GamesInfo() {
    const games = await prisma.games.findMany({
        include: { consoles: true }
    })

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Games</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <div key={game.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={"imgs/"+game.cover}
                                alt={game.title}
                                className="w-full h-56 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {game.title}
                                <div className="badge badge-secondary">{game.genre}</div>
                            </h2>
                            <p className="text-sm text-gray-500">🎮 {game.consoles.name}</p>
                            <p className="text-sm">{game.description}</p>
                            <div className="card-actions justify-end mt-2">
                                <div className="badge badge-outline">{game.developer}</div>
                                <div className="badge badge-outline">${game.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}