---
title: CEnvCombinedLightProbeVolume
---

```csharp
public interface CEnvCombinedLightProbeVolume : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvCombinedLightProbeVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Entity_Color

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L17)

```csharp
ref Color Entity_Color { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### Entity_bCustomCubemapTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L23)

```csharp
ref bool Entity_bCustomCubemapTexture { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L73)

```csharp
ref bool Entity_bEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bMoveable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L47)

```csharp
ref bool Entity_bMoveable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bStartDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L55)

```csharp
ref bool Entity_bStartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_flBrightness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L19)

```csharp
ref float Entity_flBrightness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_flEdgeFadeDist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L57)

```csharp
ref float Entity_flEdgeFadeDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_hCubemapTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hCubemapTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightIndicesTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L37)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightIndicesTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightScalarsTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L39)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightScalarsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightShadowsTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L41)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightShadowsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_AmbientCube

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L25)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_AmbientCube { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SDF

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L27)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SDF { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_B

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L35)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_B { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_DC

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L29)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_DC { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_G

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L33)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_G { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_R

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L31)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_R { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_nEnvCubeMapArrayIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L51)

```csharp
ref int Entity_nEnvCubeMapArrayIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nHandshake

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L49)

```csharp
ref int Entity_nHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L67)

```csharp
ref int Entity_nLightProbeAtlasX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L69)

```csharp
ref int Entity_nLightProbeAtlasY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L71)

```csharp
ref int Entity_nLightProbeAtlasZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L61)

```csharp
ref int Entity_nLightProbeSizeX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L63)

```csharp
ref int Entity_nLightProbeSizeY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L65)

```csharp
ref int Entity_nLightProbeSizeZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nPriority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L53)

```csharp
ref int Entity_nPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_vBoxMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L45)

```csharp
ref Vector Entity_vBoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Entity_vBoxMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L43)

```csharp
ref Vector Entity_vBoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Entity_vEdgeFadeDists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L59)

```csharp
ref Vector Entity_vEdgeFadeDists { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

## Methods

### Entity_ColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L75)

```csharp
void Entity_ColorUpdated()
```

### Entity_bCustomCubemapTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L78)

```csharp
void Entity_bCustomCubemapTextureUpdated()
```

### Entity_bEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L103)

```csharp
void Entity_bEnabledUpdated()
```

### Entity_bMoveableUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L90)

```csharp
void Entity_bMoveableUpdated()
```

### Entity_bStartDisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L94)

```csharp
void Entity_bStartDisabledUpdated()
```

### Entity_flBrightnessUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L76)

```csharp
void Entity_flBrightnessUpdated()
```

### Entity_flEdgeFadeDistUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L95)

```csharp
void Entity_flEdgeFadeDistUpdated()
```

### Entity_hCubemapTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L77)

```csharp
void Entity_hCubemapTextureUpdated()
```

### Entity_hLightProbeDirectLightIndicesTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L85)

```csharp
void Entity_hLightProbeDirectLightIndicesTextureUpdated()
```

### Entity_hLightProbeDirectLightScalarsTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L86)

```csharp
void Entity_hLightProbeDirectLightScalarsTextureUpdated()
```

### Entity_hLightProbeDirectLightShadowsTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L87)

```csharp
void Entity_hLightProbeDirectLightShadowsTextureUpdated()
```

### Entity_hLightProbeTexture_AmbientCubeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L79)

```csharp
void Entity_hLightProbeTexture_AmbientCubeUpdated()
```

### Entity_hLightProbeTexture_SDFUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L80)

```csharp
void Entity_hLightProbeTexture_SDFUpdated()
```

### Entity_hLightProbeTexture_SH2_BUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L84)

```csharp
void Entity_hLightProbeTexture_SH2_BUpdated()
```

### Entity_hLightProbeTexture_SH2_DCUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L81)

```csharp
void Entity_hLightProbeTexture_SH2_DCUpdated()
```

### Entity_hLightProbeTexture_SH2_GUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L83)

```csharp
void Entity_hLightProbeTexture_SH2_GUpdated()
```

### Entity_hLightProbeTexture_SH2_RUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L82)

```csharp
void Entity_hLightProbeTexture_SH2_RUpdated()
```

### Entity_nEnvCubeMapArrayIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L92)

```csharp
void Entity_nEnvCubeMapArrayIndexUpdated()
```

### Entity_nHandshakeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L91)

```csharp
void Entity_nHandshakeUpdated()
```

### Entity_nLightProbeAtlasXUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L100)

```csharp
void Entity_nLightProbeAtlasXUpdated()
```

### Entity_nLightProbeAtlasYUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L101)

```csharp
void Entity_nLightProbeAtlasYUpdated()
```

### Entity_nLightProbeAtlasZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L102)

```csharp
void Entity_nLightProbeAtlasZUpdated()
```

### Entity_nLightProbeSizeXUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L97)

```csharp
void Entity_nLightProbeSizeXUpdated()
```

### Entity_nLightProbeSizeYUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L98)

```csharp
void Entity_nLightProbeSizeYUpdated()
```

### Entity_nLightProbeSizeZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L99)

```csharp
void Entity_nLightProbeSizeZUpdated()
```

### Entity_nPriorityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L93)

```csharp
void Entity_nPriorityUpdated()
```

### Entity_vBoxMaxsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L89)

```csharp
void Entity_vBoxMaxsUpdated()
```

### Entity_vBoxMinsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L88)

```csharp
void Entity_vBoxMinsUpdated()
```

### Entity_vEdgeFadeDistsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCombinedLightProbeVolume.cs#L96)

```csharp
void Entity_vEdgeFadeDistsUpdated()
```

