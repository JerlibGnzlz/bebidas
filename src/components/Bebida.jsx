import { Col, Card, Button } from "react-bootstrap";
import { useBebidas } from "../hooks/useBebidas";


export const Bebida = ({ bebida }) => {


    const { handleModalclick } = useBebidas();


    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrinkThumb}`}
                />
            </Card>

            <Card.Body>
                <Card.Title>${bebida.strDrink}</Card.Title>
                <Button
                    variant="warning"
                    className="w-100 text-uppercase mt-2"
                    onClick={() => {
                        handleModalclick();
                    }}
                >
                    Ver Receta
                </Button>
            </Card.Body>
        </Col>
    );
};
