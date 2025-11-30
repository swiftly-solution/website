---
title: CEnvLightProbeVolume
---

# Interface CEnvLightProbeVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvLightProbeVolume : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvLightProbeVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvLightProbeVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entity_bEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L60)

```csharp
ref bool Entity_bEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bMoveable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L40)

```csharp
ref bool Entity_bMoveable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bStartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L46)

```csharp
ref bool Entity_bStartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_hLightProbeDirectLightIndicesTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L30)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightIndicesTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightScalarsTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L32)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightScalarsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeDirectLightShadowsTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L34)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeDirectLightShadowsTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_AmbientCube

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_AmbientCube { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SDF

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SDF { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_B

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L28)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_B { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_DC

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_DC { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_G

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_G { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_hLightProbeTexture_SH2_R

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hLightProbeTexture_SH2_R { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_nHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L42)

```csharp
ref int Entity_nHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L54)

```csharp
ref int Entity_nLightProbeAtlasX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L56)

```csharp
ref int Entity_nLightProbeAtlasY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeAtlasZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L58)

```csharp
ref int Entity_nLightProbeAtlasZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L48)

```csharp
ref int Entity_nLightProbeSizeX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L50)

```csharp
ref int Entity_nLightProbeSizeY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nLightProbeSizeZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L52)

```csharp
ref int Entity_nLightProbeSizeZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L44)

```csharp
ref int Entity_nPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_vBoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L38)

```csharp
ref Vector Entity_vBoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Entity_vBoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L36)

```csharp
ref Vector Entity_vBoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### Entity_bEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L83)

```csharp
void Entity_bEnabledUpdated()
```

### Entity_bMoveableUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L73)

```csharp
void Entity_bMoveableUpdated()
```

### Entity_bStartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L76)

```csharp
void Entity_bStartDisabledUpdated()
```

### Entity_hLightProbeDirectLightIndicesTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L68)

```csharp
void Entity_hLightProbeDirectLightIndicesTextureUpdated()
```

### Entity_hLightProbeDirectLightScalarsTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L69)

```csharp
void Entity_hLightProbeDirectLightScalarsTextureUpdated()
```

### Entity_hLightProbeDirectLightShadowsTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L70)

```csharp
void Entity_hLightProbeDirectLightShadowsTextureUpdated()
```

### Entity_hLightProbeTexture_AmbientCubeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L62)

```csharp
void Entity_hLightProbeTexture_AmbientCubeUpdated()
```

### Entity_hLightProbeTexture_SDFUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L63)

```csharp
void Entity_hLightProbeTexture_SDFUpdated()
```

### Entity_hLightProbeTexture_SH2_BUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L67)

```csharp
void Entity_hLightProbeTexture_SH2_BUpdated()
```

### Entity_hLightProbeTexture_SH2_DCUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L64)

```csharp
void Entity_hLightProbeTexture_SH2_DCUpdated()
```

### Entity_hLightProbeTexture_SH2_GUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L66)

```csharp
void Entity_hLightProbeTexture_SH2_GUpdated()
```

### Entity_hLightProbeTexture_SH2_RUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L65)

```csharp
void Entity_hLightProbeTexture_SH2_RUpdated()
```

### Entity_nHandshakeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L74)

```csharp
void Entity_nHandshakeUpdated()
```

### Entity_nLightProbeAtlasXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L80)

```csharp
void Entity_nLightProbeAtlasXUpdated()
```

### Entity_nLightProbeAtlasYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L81)

```csharp
void Entity_nLightProbeAtlasYUpdated()
```

### Entity_nLightProbeAtlasZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L82)

```csharp
void Entity_nLightProbeAtlasZUpdated()
```

### Entity_nLightProbeSizeXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L77)

```csharp
void Entity_nLightProbeSizeXUpdated()
```

### Entity_nLightProbeSizeYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L78)

```csharp
void Entity_nLightProbeSizeYUpdated()
```

### Entity_nLightProbeSizeZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L79)

```csharp
void Entity_nLightProbeSizeZUpdated()
```

### Entity_nPriorityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L75)

```csharp
void Entity_nPriorityUpdated()
```

### Entity_vBoxMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L72)

```csharp
void Entity_vBoxMaxsUpdated()
```

### Entity_vBoxMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLightProbeVolume.cs#L71)

```csharp
void Entity_vBoxMinsUpdated()
```

