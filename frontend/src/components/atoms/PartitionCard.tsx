import { BiMusic } from 'react-icons/bi'

type Props = {
  title: string
  author?: string
  category?: string
  imageUrl?: string
}

const PartitionCard = ({ title, author, category, imageUrl }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="h-40 w-full rounded-lg overflow-hidden bg-purple-50 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-purple-600 text-5xl">
            <BiMusic />
          </div>
        )}
      </div>

      <div className="mt-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-purple-900">{title}</h3>
        {author && <p className="text-sm text-gray-500">{author}</p>}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{category ?? 'Autre'}</span>
          <button className="text-sm text-white bg-purple-600 px-3 py-1 rounded-full hover:bg-purple-700 cursor-pointer transition">Voir</button>
        </div>
      </div>
    </div>
  )
}

export default PartitionCard
