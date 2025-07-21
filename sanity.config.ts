import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'osom-cms',
  title: 'osom CMS',
  
  projectId,
  dataset,
  
  plugins: [
    deskTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'fr', title: 'Français' },
        { id: 'en', title: 'English' },
        { id: 'de', title: 'Deutsch' },
      ],
      defaultLanguages: ['fr'],
      fieldTypes: ['string', 'text', 'array', 'reference'],
    }),
  ],
  
  schema: {
    types: [
      // Service Schema
      {
        name: 'service',
        title: 'Services',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Titre',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title.fr',
              maxLength: 96,
            },
            validation: Rule => Rule.required(),
          },
          {
            name: 'shortDescription',
            title: 'Description courte',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description complète',
            type: 'internationalizedArrayText',
          },
          {
            name: 'icon',
            title: 'Icône',
            type: 'string',
            description: 'Nom de l\'icône (ex: web, seo, design)',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
          {
            name: 'features',
            title: 'Fonctionnalités',
            type: 'internationalizedArrayText',
          },
          {
            name: 'price',
            title: 'Prix',
            type: 'object',
            fields: [
              {
                name: 'starting',
                title: 'À partir de',
                type: 'number',
              },
              {
                name: 'currency',
                title: 'Devise',
                type: 'string',
                initialValue: 'CHF',
              },
            ],
          },
          {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Titre SEO',
                type: 'internationalizedArrayString',
              },
              {
                name: 'description',
                title: 'Description SEO',
                type: 'internationalizedArrayString',
              },
              {
                name: 'keywords',
                title: 'Mots-clés',
                type: 'internationalizedArrayString',
              },
            ],
          },
        ],
      },
      
      // Case Study Schema
      {
        name: 'caseStudy',
        title: 'Études de cas',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Titre',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title.fr',
              maxLength: 96,
            },
            validation: Rule => Rule.required(),
          },
          {
            name: 'client',
            title: 'Client',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
              list: [
                { title: 'Site Web', value: 'website' },
                { title: 'E-commerce', value: 'ecommerce' },
                { title: 'SEO', value: 'seo' },
                { title: 'Branding', value: 'branding' },
                { title: 'Marketing', value: 'marketing' },
              ],
            },
          },
          {
            name: 'year',
            title: 'Année',
            type: 'number',
            validation: Rule => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'internationalizedArrayText',
          },
          {
            name: 'image',
            title: 'Image principale',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
          {
            name: 'gallery',
            title: 'Galerie',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                  },
                ],
              },
            ],
          },
          {
            name: 'results',
            title: 'Résultats',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'metric',
                    title: 'Métrique',
                    type: 'internationalizedArrayString',
                  },
                  {
                    name: 'value',
                    title: 'Valeur',
                    type: 'string',
                  },
                  {
                    name: 'improvement',
                    title: 'Amélioration',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'technologies',
            title: 'Technologies utilisées',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'url',
            title: 'URL du projet',
            type: 'url',
          },
          {
            name: 'featured',
            title: 'Projet vedette',
            type: 'boolean',
            initialValue: false,
          },
        ],
      },
      
      // Blog Post Schema
      {
        name: 'blogPost',
        title: 'Articles de blog',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Titre',
            type: 'internationalizedArrayString',
            validation: Rule => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title.fr',
              maxLength: 96,
            },
            validation: Rule => Rule.required(),
          },
          {
            name: 'author',
            title: 'Auteur',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
            validation: Rule => Rule.required(),
          },
          {
            name: 'excerpt',
            title: 'Extrait',
            type: 'internationalizedArrayString',
          },
          {
            name: 'content',
            title: 'Contenu',
            type: 'internationalizedArrayText',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
          {
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
              list: [
                { title: 'Web Development', value: 'web-dev' },
                { title: 'SEO', value: 'seo' },
                { title: 'Design', value: 'design' },
                { title: 'Marketing', value: 'marketing' },
                { title: 'Business', value: 'business' },
              ],
            },
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Titre SEO',
                type: 'internationalizedArrayString',
              },
              {
                name: 'description',
                title: 'Description SEO',
                type: 'internationalizedArrayString',
              },
              {
                name: 'keywords',
                title: 'Mots-clés',
                type: 'internationalizedArrayString',
              },
            ],
          },
        ],
      },
    ],
  },
})