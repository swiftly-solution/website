---
title: CEnvParticleGlow
---

```csharp
public interface CEnvParticleGlow : CParticleSystem, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CParticleSystem>, ISchemaClass<CEnvParticleGlow>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AlphaScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L16)

```csharp
ref float AlphaScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ColorTint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L22)

```csharp
ref Color ColorTint { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

**RadiusScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L18)

```csharp
ref float RadiusScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SelfIllumScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L20)

```csharp
ref float SelfIllumScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TextureOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> TextureOverride { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

## Methods

**AlphaScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L26)

```csharp
void AlphaScaleUpdated()
```

**ColorTintUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L29)

```csharp
void ColorTintUpdated()
```

**RadiusScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L27)

```csharp
void RadiusScaleUpdated()
```

**SelfIllumScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L28)

```csharp
void SelfIllumScaleUpdated()
```

**TextureOverrideUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvParticleGlow.cs#L30)

```csharp
void TextureOverrideUpdated()
```

