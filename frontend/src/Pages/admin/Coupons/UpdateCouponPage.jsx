import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UpdateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const couponId = params.id;


  const onFinish = async (values) => {
    setLoading(true);
    try {
  
      const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
  
        message.success("Kupon başarıyla güncellendi.");
      } else {
   
        message.error("Kupon güncellenirken bir hata oluştu.");
      }
    } catch (error) {

      console.log("Kupon güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchSingleCategory = async () => {
      setLoading(true);

      try {

        const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
        const data = await response.json();

        if (data) {
          form.setFieldsValue({
            name: data.name,
            img: data.img,
            code: data.code,
            discountPercent: data.discountPercent,
          });
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCategory();

  }, [couponId, form]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
   
          label="Kupon İsmi"
          name="code"
          rules={[
            {
              required: true,

              message: "Lütfen bir kupon kodu girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
  
          label="Kupon İndirim Oranı"
          name="discountPercent"
          rules={[
            {
              required: true,
        
              message: "Lütfen bir kupon indirim oranı girin!",
            },
          ]}
        >
          <Input />
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Güncelle
        </Button>
      </Form>
    </Spin>
  );
};


export default UpdateCouponPage;