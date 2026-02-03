export const Bestsellers = () => {
  const bestsellers = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/06/64/e3/0664e34c96881f14403dcf552a416f7d.jpg",
      title: "крем для лица",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/59/4a/87/594a87cd7c5a79218de03abd91b0e39d.jpg",
      title: "Тональный крем",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/e8/7e/f8/e87ef8bb407c756ad25b42d8502ca703.jpg",
      title: "Набор косметики",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/e7/e0/7e/e7e07e1d6522311442babf46f7ba06fc.jpg",
      title: "Сыворотка для лица",
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Хиты продаж
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute h-[90px] bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
