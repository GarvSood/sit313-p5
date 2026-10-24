function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-bold mb-4">
            Explore
          </h3>

          <p className="mb-2">Home</p>
          <p className="mb-2">Questions</p>
          <p className="mb-2">Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Support
          </h3>

          <p className="mb-2">FAQs</p>
          <p className="mb-2">Help</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Stay Connected
          </h3>

          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

      </div>

      <div className="text-center py-6 border-t border-gray-700">
        <p className="font-bold mb-3">
          DEV@Deakin 2022
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer