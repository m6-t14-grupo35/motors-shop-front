import Input from '@/components/input';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IaddAd } from '@/interfaces/forms.interfaces';
import { useEffect, useState } from "react";
import React, { forwardRef, Ref } from "react";
import { MdClose } from "react-icons/md"
import { IadOptional, IaddImageInputProps, IediteAdProps } from '@/interfaces/componentProps.interface';
import { Button_24, Button_3, Button_7 } from '@/components/buttons';
import { api } from '@/services/api';
import nookies, { parseCookies } from "nookies"
import { editeAdSchema } from '@/schemas/ad.schemas';
import { toast } from 'react-toastify';
import { filterEmptyData } from '@/utils/functions';

// const maxYear = new Date().getFullYear() + 1

export const ModalEditeAd = ({closeFunction, adId}: IediteAdProps) => {
  const token = parseCookies().motorsShopToken
  const [imageCount, setImageCount] = useState(0);
  const [adData, setAdData] = useState<null | IaddAd>(null)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [isregistreddatas, setIsregistreddatas] = useState(true)

  const {register, handleSubmit, formState: {errors}, setValue} = useForm<IaddAd>({
    resolver: zodResolver(editeAdSchema),
    shouldUnregister: false
  });

  const addImageField = () => {
    if (imageCount < 5) {
      setImageCount(imageCount + 1);
    }
  };

  const sttAd = () => {
    if (adId) {
      api.get(`ads/${adId}`)

      .then((response) => {
        setAdData(response.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  api.get(`images/${adId}`)

  .then((response) => {
    setCoverImage(response.data.cover)

  })
  .catch((error) => {
    console.log(error)
  })
}

  useEffect(() => {
    sttAd()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (adData && isregistreddatas && coverImage) {
    Object.keys(adData).forEach((key) => {
      //@ts-ignore
      setValue(key, adData[key]);
    });

    setValue('cover', coverImage)

    setIsregistreddatas(false)
  }

    const editeFunction = async (data:IaddAd) => {
      const { cover,image_1, image_2, image_3, image_4, image_5, ...otherData } = data
      const adData = otherData
      const imagesData = {cover:cover,image_1:image_1, image_2:image_2, image_3:image_3, image_4:image_4, image_5:image_5}

      const responseAd = await api.patch(`ads/${adId}`, filterEmptyData(adData), {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(responseAd.status == 200){
        toast.success("Anúncio editado")
        console.log(responseAd);
      }else{
        toast.error("Houve um erro reveja os dados e tente novamente")
        console.log(responseAd);
      }

      const responseImages = await api.patch(`images/${adId}`, filterEmptyData(imagesData), {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(responseImages.status == 200){
        toast.success("Imagens atualizadas com sucesso")
        console.log(responseImages);
      }else{
        toast.error("Houve um erro ao atualizar as imagens")
        console.log(responseImages);
      }

  }

  // const onSubmit: SubmitHandler<IadOptional> = (data) => {editeFunction(data)};
  const onSubmit: SubmitHandler<IaddAd> = data => {editeFunction(data)};


  return(
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='w-full max-w-[520px] bg-white rounded py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar'>
        <div>
          <div className='w-full flex justify-between '>
            <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Editar anúncio </h2>
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
              required={false}
              error={errors.brand?.message}
              defaultValue={adData?.brand}
              // value={ad.brand && ad.brand}
              {...register('brand')}
            />

            <Input
              id="model"
              type="text"
              label="Modelo"
              placeholder='A 200 CGI ADVANCE'
              required={false}
              error={errors.model?.message}
              defaultValue={adData?.model}
              // value={ad.model && ad.model}
              {...register('model')}
            />

            <div className='flex gap-[21px] w-full'>
              <Input
                id="year"
                type="number"
                label="Ano"
                placeholder='2018'
                required={false}
                error={errors.year?.message}
                defaultValue={adData?.year}
                // @ts-ignore
                // value={ad.year && ad.year}
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
                  required={false}
                  defaultValue={adData?.fuel}
                  {...register('fuel')}
                  className='pl-[14px] block w-full rounded-md border-0 py-[8px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2'
                >
                  <option value=''></option>
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
                id="km"
                type="number"
                label="Quilometragem"
                placeholder='30000'
                required={false}
                error={errors.km?.message}
                defaultValue={adData?.km}
                {...register('km')}
              />

              <Input
                id="color"
                type="text"
                label="Cor"
                placeholder='Branco'
                required={false}
                error={errors.color?.message}
                defaultValue={adData?.color}
                {...register('color')}
              />
            </div>

            <div className='flex gap-[21px] w-full'>
              <Input
                  id="priceFIPE"
                  type="number"
                  label="Preço tabela FIPE"
                  placeholder='RS 48000'
                  required={false}
                  error={errors.priceFIPE?.message}
                  defaultValue={adData?.priceFIPE}
                  {...register('priceFIPE')}
              />

              <Input
                id="selePrice"
                type="number"
                label="Preço"
                placeholder='R$ 50000'
                required={false}
                error={errors.price?.message}
                defaultValue={adData?.price}
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
                required={false}
                className="resize-none px-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2"
                {...register('description')}
                defaultValue={adData?.description}
              />

              {errors.description?.message && <p className="text-sm/5 text-red-700 absolute">errors.descripitions.message </p>}
            </div>

            <Input
              id="coverImage"
              type="text"
              label="Imagem de capa"
              placeholder='https://image.com'
              required={false}
              error={errors.cover?.message}
              defaultValue={coverImage}
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
                {...register(`image_${index + 2}`)}
              />
            ))}

            <Button_7 type="button" text="Adicionar campo para imagem da galeria" onClick={addImageField}/>

            <div className='flex flex-wrap gap-[10px] justify-between sw370:justify-end w-full mt-[30px]'>
              <Button_3 onClick={() => closeFunction()} type="button" text="Cancelar" height={2}/>
              <Button_24 type="submit" text="Editar anúncio" height={2}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
