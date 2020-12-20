// Card component is a reusable component. When I change the styles of Card. All Cards being used will update
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  return (
    <div>
      <h2 className="mb-3">My Projects</h2>
      {/* Setup a bootstrap grid system */}
      <div className="row">
        <div className="col">
          <Card>
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae vero unde esse ipsam atque voluptates necessitatibus deleniti dignissimos delectus illo ducimus quod, neque quidem, accusantium saepe illum voluptatibus similique.</p>
            {/* Set up versatile reusable components */}
            <Button color="primary">View Details</Button>
          </Card>
        </div>
        <div className="col">
          <Card>
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae vero unde esse ipsam atque voluptates necessitatibus deleniti dignissimos delectus illo ducimus quod, neque quidem, accusantium saepe illum voluptatibus similique.</p>
            <Button color="secondary">View Details</Button>
          </Card>
        </div>
        <div className="col">
          <Card>
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae vero unde esse ipsam atque voluptates necessitatibus deleniti dignissimos delectus illo ducimus quod, neque quidem, accusantium saepe illum voluptatibus similique.</p>
            <Button>View Details</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
