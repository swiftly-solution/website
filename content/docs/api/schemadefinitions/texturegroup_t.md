---
title: TextureGroup_t
---

# Interface TextureGroup_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface TextureGroup_t : ISchemaClass<TextureGroup_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<TextureGroup_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Enabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L18)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Gradient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L25)

```csharp
SchemaUntypedField Gradient { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### ReplaceTextureWithGradient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L20)

```csharp
ref bool ReplaceTextureWithGradient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Texture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Texture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### TextureBlend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L33)

```csharp
CParticleCollectionRendererFloatInput TextureBlend { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### TextureBlendMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L31)

```csharp
ref ParticleTextureLayerBlendType_t TextureBlendMode { get; }
```

#### Property Value

- [ParticleTextureLayerBlendType_t](/docs/api/schemadefinitions/particletexturelayerblendtype_t)

### TextureChannels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L29)

```csharp
ref SpriteCardTextureChannel_t TextureChannels { get; }
```

#### Property Value

- [SpriteCardTextureChannel_t](/docs/api/schemadefinitions/spritecardtexturechannel_t)

### TextureControls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L35)

```csharp
TextureControls_t TextureControls { get; }
```

#### Property Value

- [TextureControls_t](/docs/api/schemadefinitions/texturecontrols_t)

### TextureType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TextureGroup_t.cs#L27)

```csharp
ref SpriteCardTextureType_t TextureType { get; }
```

#### Property Value

- [SpriteCardTextureType_t](/docs/api/schemadefinitions/spritecardtexturetype_t)

