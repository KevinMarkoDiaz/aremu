import React from "react";
import BANNER from "../assets/banner3.jpg";
import BANNER_LQ from "../assets/banner3_LQ.jpg";

import LQIPImage from "../components/common/LQIPImage";

const AboutUs = () => {
  return (
    <div className="flex max-md:flex-col">
      <LQIPImage
        classnames="max-md:h-dvh md:w-2/5 object-cover "
        lowRes={BANNER_LQ}
        highRes={BANNER}
        alt="banner"
      />
      <div className="flex flex-col gap-8 max-md:p-12 md:p-32 self-center">
        <div className=" grid gap-4 ">
          <p className="font-semibold text-xl">Our Story</p>
          <p>
            Since 2005, Hester has done more than refine an old tradition.
            Guided by an international palate, we fuse unique pickling
            techniques from around the world to create the most interesting
            flavors and textures. Hester makes everything in small batches from
            our home base in New York. To achieve optimal flavor, our products
            age from three weeks to four months, making every pickle worth your
            patience.
          </p>
        </div>

        <div className=" grid gap-4">
          <p className="font-semibold text-xl">
            Hester produces fresh, organic produce from local farmers in New
            York. Even our spices are fresh. Just because pickling is a
            preservation process doesn’t mean you can use dried-up thyme or
            week-old asparagus that’s already a little spongy.
          </p>
          <p>
            We want to give our customers crisp, crunchy and delicious pickled
            vegetables and fruits. Most of all, we want to expand people’s
            palates and prove that pickles don’t always come in a green or red
            variety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
