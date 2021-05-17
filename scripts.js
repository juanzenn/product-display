const variants = document.getElementsByClassName("mini_circle")
const productImage = document.getElementById("current_product")
const productColor = document.getElementById("variant_color")

const choseVariant = e => {
  const props = e.target
  productColor.innerHTML = `${props.classList[1]}`
  productImage.style.backgroundImage = `${props.id}`

}

// Set the onclick function
for (let i = 0; i < variants.length; i++) {
  variants[i].addEventListener("click", choseVariant)
}