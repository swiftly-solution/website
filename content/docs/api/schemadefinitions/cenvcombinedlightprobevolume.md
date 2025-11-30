---
title: CEnvCombinedLightProbeVolume
---

# Interface CEnvCombinedLightProbeVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvCombinedLightProbeVolume : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvCombinedLightProbeVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvCombinedLightProbeVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entity_Color

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L18)

```csharp
ref Color Entity_Color { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### Entity_bCustomCubemapTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L24)

```csharp
ref bool Entity_bCustomCubemapTexture { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L74)

```csharp
ref bool Entity_bEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bMoveable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L48)

```csharp
ref bool Entity_bMoveable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bStartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L56)

```csharp
ref bool Entity_bStartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_flBrightness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L20)

```csharp
ref float Entity_flBrightness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_flEdgeFadeDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L58)

```csharp
ref float Entity_flEdgeFadeDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_hCubemapTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hCubemapTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightIndicesTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L38)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightIndicesTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightScalarsTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L40)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightScalarsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightShadowsTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L42)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightShadowsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_AmbientCube

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_AmbientCube { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SDF

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L28)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SDF { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_B

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L36)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_B { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_DC

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L30)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_DC { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_G

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L34)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_G { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_R

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L32)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_R { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_nEnvCubeMapArrayIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L52)

```csharp
ref int Entity_nEnvCubeMapArrayIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L50)

```csharp
ref int Entity_nHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L68)

```csharp
ref int Entity_nLightProbeAtlasX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L70)

```csharp
ref int Entity_nLightProbeAtlasY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L72)

```csharp
ref int Entity_nLightProbeAtlasZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L62)

```csharp
ref int Entity_nLightProbeSizeX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L64)

```csharp
ref int Entity_nLightProbeSizeY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L66)

```csharp
ref int Entity_nLightProbeSizeZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L54)

```csharp
ref int Entity_nPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_vBoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L46)

```csharp
ref Vector Entity_vBoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Entity_vBoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L44)

```csharp
ref Vector Entity_vBoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Entity_vEdgeFadeDists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L60)

```csharp
ref Vector Entity_vEdgeFadeDists { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### Entity_ColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L76)

```csharp
void Entity_ColorUpdated()
```

### Entity_bCustomCubemapTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L79)

```csharp
void Entity_bCustomCubemapTextureUpdated()
```

### Entity_bEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L104)

```csharp
void Entity_bEnabledUpdated()
```

### Entity_bMoveableUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L91)

```csharp
void Entity_bMoveableUpdated()
```

### Entity_bStartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L95)

```csharp
void Entity_bStartDisabledUpdated()
```

### Entity_flBrightnessUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L77)

```csharp
void Entity_flBrightnessUpdated()
```

### Entity_flEdgeFadeDistUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L96)

```csharp
void Entity_flEdgeFadeDistUpdated()
```

### Entity_hCubemapTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L78)

```csharp
void Entity_hCubemapTextureUpdated()
```

### Entity_hLightProbeDirectLightIndicesTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L86)

```csharp
void Entity_hLightProbeDirectLightIndicesTextureUpdated()
```

### Entity_hLightProbeDirectLightScalarsTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L87)

```csharp
void Entity_hLightProbeDirectLightScalarsTextureUpdated()
```

### Entity_hLightProbeDirectLightShadowsTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L88)

```csharp
void Entity_hLightProbeDirectLightShadowsTextureUpdated()
```

### Entity_hLightProbeTexture_AmbientCubeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L80)

```csharp
void Entity_hLightProbeTexture_AmbientCubeUpdated()
```

### Entity_hLightProbeTexture_SDFUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L81)

```csharp
void Entity_hLightProbeTexture_SDFUpdated()
```

### Entity_hLightProbeTexture_SH2_BUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L85)

```csharp
void Entity_hLightProbeTexture_SH2_BUpdated()
```

### Entity_hLightProbeTexture_SH2_DCUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L82)

```csharp
void Entity_hLightProbeTexture_SH2_DCUpdated()
```

### Entity_hLightProbeTexture_SH2_GUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L84)

```csharp
void Entity_hLightProbeTexture_SH2_GUpdated()
```

### Entity_hLightProbeTexture_SH2_RUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L83)

```csharp
void Entity_hLightProbeTexture_SH2_RUpdated()
```

### Entity_nEnvCubeMapArrayIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L93)

```csharp
void Entity_nEnvCubeMapArrayIndexUpdated()
```

### Entity_nHandshakeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L92)

```csharp
void Entity_nHandshakeUpdated()
```

### Entity_nLightProbeAtlasXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L101)

```csharp
void Entity_nLightProbeAtlasXUpdated()
```

### Entity_nLightProbeAtlasYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L102)

```csharp
void Entity_nLightProbeAtlasYUpdated()
```

### Entity_nLightProbeAtlasZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L103)

```csharp
void Entity_nLightProbeAtlasZUpdated()
```

### Entity_nLightProbeSizeXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L98)

```csharp
void Entity_nLightProbeSizeXUpdated()
```

### Entity_nLightProbeSizeYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L99)

```csharp
void Entity_nLightProbeSizeYUpdated()
```

### Entity_nLightProbeSizeZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L100)

```csharp
void Entity_nLightProbeSizeZUpdated()
```

### Entity_nPriorityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L94)

```csharp
void Entity_nPriorityUpdated()
```

### Entity_vBoxMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L90)

```csharp
void Entity_vBoxMaxsUpdated()
```

### Entity_vBoxMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L89)

```csharp
void Entity_vBoxMinsUpdated()
```

### Entity_vEdgeFadeDistsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L97)

```csharp
void Entity_vEdgeFadeDistsUpdated()
```

