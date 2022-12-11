import React from "react";

function Preview() {
  const PopularRecipes = [
    {
      id: 1,
      title: "Chicken salad",
      content:
        "This family favorite chicken salad is made with celery, bell pepper, green olives, apple, lettuce, and mayo—plus a secret ingredient that makes all the difference! ",
      imageUrl:
        "https://images.unsplash.com/photo-1574926054530-540288c8e678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "Roast chicken",
      content:
        "The perfect roast chicken doesn’t require a lot of extra ingredients—just some kosher salt, freshly ground pepper, and fresh thyme (and the thyme is optional). Instead, it gets its wonderful flavor and crispy skin from a few simple but essential steps",
      imageUrl:
        "https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Fish ",
      content:
        "This lemon butter fish recipe is fabulous with any tender, flaky, mild flavored white fish. Any firm white fish such as cod, halibut, snapper, or mahi mahi would work beautifully.",
      imageUrl:
        "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div className="preview">
      <h2>Popular Recipes</h2>
      <div className="preview-container">
        {PopularRecipes.map(({ id, title, content, imageUrl }) => (
          <div
            className="panel"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            key={id}
          >
            <h3 className="heading">{title}</h3>
            <div className="preview-desc">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
