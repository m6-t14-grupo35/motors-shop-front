import Input from '@/components/input';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IaddAd } from '@/interfaces/forms.interfaces';
import { useState } from "react";
import React, { forwardRef, Ref } from "react";
import { MdClose } from "react-icons/md"
import { IaddImageInputProps } from '@/interfaces/componentProps.interface';
import { Button_24, Button_3, Button_7 } from '@/components/buttons';
import { api } from '@/services/api';
import { parseCookies } from 'nookies';
import { addAdSchema } from '@/schemas/ad.schemas';
import { toast } from "react-toastify";

export const ModalAddAd = ({closeFunction}: {closeFunction:() => void}) => {
  const [imageCount, setImageCount] = useState(0);
  const token = parseCookies().motorsShopToken

  const addImageField = () => {
    if (imageCount < 5) {
      setImageCount(imageCount + 1);
    }
  };

  const registerFunction = async (data:IaddAd) => {
    const { cover ,image_1 ,image_2, image_3, image_4, image_5, ...otherData } = data
    const adData = otherData
    const imagesData = {cover:cover,image_1:image_1, image_2:image_2, image_3:image_3, image_4:image_4, image_5:image_5}

    const responseAd = await api.post("ads/", adData, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    if(responseAd.status == 201){

      const responseImages = await api.post(`images/${responseAd.data.id}`, imagesData, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(responseImages.status == 201){
        toast.success("anuncio cadastrado com sucesso")
      }else{
        toast.error("Houve um erro ao cadastrar as imagens")
      }

    }else{
      toast.error("Houve um erro reveja os dados e tente novamente")
    }

  }

  const {register, handleSubmit, formState: {errors}} = useForm<IaddAd>({
    resolver: zodResolver(addAdSchema),
    shouldUnregister: false
  });
  const onSubmit: SubmitHandler<IaddAd> = data => {registerFunction(data)};
  // const onSubmit: SubmitHandler<IaddAd> = data => {console.log(data)};

  return(
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='w-full max-w-[520px] bg-white rounded py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar'>
        <div>
          <div className='w-full flex justify-between '>
            <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Criar anúncio </h2>
            <button onClick={() => closeFunction()}>
              <MdClose className='text-grey-3 text-[20px] font-extrabold'/>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[24px]'>

            <Input
              id="Brand"
              type="text"
              label="Marca"
              placeholder='Mercedes Benz'
              required={true}
              error={errors.brand?.message}
              {...register('brand')}
            />



            <Input
              id="model"
              type="text"
              label="Modelo"
              placeholder='A 200 CGI ADVANCE'
              required={true}
              error={errors.model?.message}
              {...register('model')}
            />

            <div className='flex gap-[21px] w-full'>
              <Input
                id="year"
                type="number"
                label="Ano"
                placeholder='2018'
                required={true}
                error={errors.year?.message}
                {...register('year')}
              />

              <div className='w-full'>
                <label
                  className="whitespace-nowrap block text-sm font-medium leading-6 text-gray-900"
                >
                  Combustivel
                </label>

                <select
                  id="fuel"
                  required={true}
                  {...register('fuel')}
                  className='pl-[14px] block w-full rounded-md border-0 py-[8px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2'
                >

                  <option value={'Gasolina'}>Gasolina</option>
                  <option value={'Etanol'}>Etanol</option>
                  <option value={'Diesel'}>Diesel</option>
                  <option value={'GLP'}>Outros</option>
                  <option value={'hibrido'}>hibrido</option>
                  <option value={'Eletric'}>Elétrico</option>
                </select>
              </div>

            </div>

            <div className='flex gap-[21px] w-full'>
              <Input
                id="milage"
                type="number"
                label="Quilometragem"
                placeholder='30.000'
                required={true}
                error={errors.km?.message}
                {...register('km')}
              />

              <Input
                id="collor"
                type="text"
                label="Cor"
                placeholder='Branco'
                required={true}
                error={errors.color?.message}
                {...register('color')}
              />
            </div>

            <div className='flex gap-[21px] w-full'>
              <Input
                  id="priceFIPE"
                  type="number"
                  label="Preço tabela FIPE"
                  placeholder='RS 48.000,00'
                  required={true}
                  error={errors.priceFIPE?.message}
                  {...register('priceFIPE')}
              />

              <Input
                id="selePrice"
                type="number"
                label="Preço"
                placeholder='R$ 50.000,00'
                required={true}
                error={errors.price?.message}
                {...register('price')}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="whitespace-nowrap block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
                {errors.description?.message && '*'}
              </label>

              <textarea
                id="description"
                autoComplete='description'
                required={true}
                className="resize-none px-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2"
                {...register('description')}
              />

              {errors.description?.message && <p className="text-sm/5 text-red-700 absolute">errors.descripitions.message </p>}
            </div>

            <Input
              id="coverImage"
              type="text"
              label="Imagem de capa"
              placeholder='https://image.com'
              required={true}
              error={errors.cover?.message}
              {...register('cover')}
            />

            {Array.from({ length: imageCount }, (_, index) => (
              <Input
                key={`image_${index + 1}`}
                id={`image_${index + 1}`}
                type="text"
                label={`${index + 1}° Imagem da galeria`}
                placeholder="https://image.com"
                required={false}
                // @ts-ignore
                {...register(`image_${index + 1}`)}
              />
            ))}

            <Button_7 type="button" text="Adicionar campo para imagem da galeria" onClick={addImageField}/>

            <div className='flex flex-wrap gap-[10px] justify-between sw370:justify-end w-full mt-[30px]'>
              <Button_3 onClick={() => closeFunction()} type="button" text="Cancelar" height={2}/>
              <Button_24 type="submit" text="Criar anúncio" height={2}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
