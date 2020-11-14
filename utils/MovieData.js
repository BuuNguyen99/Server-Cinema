const Movies = require("../models/movieModel");

const addMovie = async (movieDets, res) => {
  // Validate the username
  let movieNameNotTaken = await validateMovieName(movieDets.name);
  if (!movieNameNotTaken) {
    return res.status(201).json({
      message: `Tên Phim Đã Tồn Tại.`,
      success: false,
    });
  }
  const newMovie = new Movies({
    ...movieDets,
  });

  await newMovie.save();
  return res.status(201).json({
    message: " Thêm Phim Thành Công.",
    success: true,
  });
};

const updateMovie = async (req, res) => {
  console.log(req.body);
  if (!req.body._id) {
    return res.status(500).send("ID is required");
  } else {
    Movies.updateOne(
      {
        _id: req.body._id,
      },
      {
        name: req.body.name,
        slug: req.body.slug,
        intro: req.body.intro,
        type: req.body.type,
        author: req.body.author,
        actor: req.body.actor,
        time: req.body.time,
        nation: req.body.nation,
        premiereDate: req.body.premiereDate,
        price: req.body.price,
        image: req.body.image,
        imageInfo: req.body.imageInfo,
        video: req.body.video,
        vote: {
          rate: req.body.vote.rate,
          numberOfReviews: req.body.vote.numberOfReviews,
        },
      },
      function (err) {
        if (err) return res.status(500).json(err);
        else {
          Movies.find((err, result) => {
            if (err) {
              res.status(500).json(err);
            } else {
              res.json(result);
            }
          });
        }
      }
    );
  }
};

const deleteMovie = async (req, res) => {
  console.log(req.params.id);
  Movies.deleteOne(
    {
      _id: req.params.id,
    },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        Movies.find((err, result) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.json(result);
          }
        });
      }
    }
  );
};

const changeRatingMovie = async (req, res) => {
  if (!req.body._id) {
    return res.status(500).send("ID is required");
  } else {
    Movies.updateOne(
      {
        _id: req.body._id,
      },
      {
        vote: {
          rate: req.body.vote.rate,
          numberOfReviews: req.body.vote.numberOfReviews,
        },
      },
      (err) => {
        if (err) return res.status(500).json(err);
        else {
          Movies.find((err, movies) => {
            if (err) res.status(500).json(err);
            else res.json(movies);
          });
        }
      }
    );
  }
};


const validateMovieName = async (movieName) => {
  let movie = await Movies.findOne({ movieName });
  return movie ? false : true;
};

module.exports = { addMovie, updateMovie, deleteMovie, changeRatingMovie };
