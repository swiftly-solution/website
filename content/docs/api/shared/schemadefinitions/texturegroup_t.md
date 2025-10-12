---
title: TextureGroup_t
---

```csharp
public interface TextureGroup_t : ISchemaClass<TextureGroup_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L16)

```csharp
ref bool Enabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Gradient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L23)

```csharp
SchemaUntypedField Gradient { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **ReplaceTextureWithGradient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L18)

```csharp
ref bool ReplaceTextureWithGradient { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Texture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Texture { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### **TextureBlend** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L31)

```csharp
CParticleCollectionRendererFloatInput TextureBlend { get; }
```

- Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

### **TextureBlendMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L29)

```csharp
ref ParticleTextureLayerBlendType_t TextureBlendMode { get; }
```

- Property Value

- [ParticleTextureLayerBlendType_t](/docs/api/shared/schemadefinitions/particletexturelayerblendtype_t)

### **TextureChannels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L27)

```csharp
ref SpriteCardTextureChannel_t TextureChannels { get; }
```

- Property Value

- [SpriteCardTextureChannel_t](/docs/api/shared/schemadefinitions/spritecardtexturechannel_t)

### **TextureControls** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L33)

```csharp
TextureControls_t TextureControls { get; }
```

- Property Value

- [TextureControls_t](/docs/api/shared/schemadefinitions/texturecontrols_t)

### **TextureType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L25)

```csharp
ref SpriteCardTextureType_t TextureType { get; }
```

- Property Value

- [SpriteCardTextureType_t](/docs/api/shared/schemadefinitions/spritecardtexturetype_t)

