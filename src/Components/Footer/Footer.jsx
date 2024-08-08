function Footer() {
  return (
    <footer className="bg-white py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm md:text-base mb-2 md:mb-0">
            Copyright © 2021 <a href="#" className="text-blue-400">CodingLab</a>. All rights reserved.
          </span>
          <div className="text-sm md:text-base">
            <a href="#" className="text-blue-400 mx-2">Privacy policy</a>
            <a href="#" className="text-blue-400 mx-2">Terms & condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
