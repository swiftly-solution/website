---
title: CEnvVolumetricFogController
---

# Interface CEnvVolumetricFogController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvVolumetricFogController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvVolumetricFogController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvVolumetricFogController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L48)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Anisotropy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L22)

```csharp
ref float Anisotropy { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L46)

```csharp
ref Vector BoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L44)

```csharp
ref Vector BoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DefaultAnisotropy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L62)

```csharp
ref float DefaultAnisotropy { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultDrawDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L66)

```csharp
ref float DefaultDrawDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultScattering

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L64)

```csharp
ref float DefaultScattering { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DrawDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L26)

```csharp
ref float DrawDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnableIndirect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L70)

```csharp
ref bool EnableIndirect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FadeInEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L30)

```csharp
ref float FadeInEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeInStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L28)

```csharp
ref float FadeInStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L24)

```csharp
ref float FadeSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L88)

```csharp
ref bool FirstTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstVolumeSliceThickness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L36)

```csharp
ref float FirstVolumeSliceThickness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogIndirectTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L74)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> FogIndirectTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### ForceRefreshCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L76)

```csharp
ref int ForceRefreshCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndirectStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L32)

```csharp
ref float IndirectStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IndirectTextureDimX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L38)

```csharp
ref int IndirectTextureDimX { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndirectTextureDimY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L40)

```csharp
ref int IndirectTextureDimY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IndirectTextureDimZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L42)

```csharp
ref int IndirectTextureDimZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsMaster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L72)

```csharp
ref bool IsMaster { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoiseScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L82)

```csharp
ref Vector NoiseScale { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### NoiseSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L78)

```csharp
ref float NoiseSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L80)

```csharp
ref float NoiseStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Scattering

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L18)

```csharp
ref float Scattering { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartAnisoTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L50)

```csharp
GameTime_t StartAnisoTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### StartAnisotropy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L56)

```csharp
ref float StartAnisotropy { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L68)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDrawDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L60)

```csharp
ref float StartDrawDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartDrawDistanceTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L54)

```csharp
GameTime_t StartDrawDistanceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### StartScatterTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L52)

```csharp
GameTime_t StartScatterTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### StartScattering

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L58)

```csharp
ref float StartScattering { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L20)

```csharp
ref Color TintColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### VolumeDepth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L34)

```csharp
ref int VolumeDepth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WindDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L86)

```csharp
ref Vector WindDirection { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### WindSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L84)

```csharp
ref float WindSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L105)

```csharp
void ActiveUpdated()
```

### AnisotropyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L92)

```csharp
void AnisotropyUpdated()
```

### BoxMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L104)

```csharp
void BoxMaxsUpdated()
```

### BoxMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L103)

```csharp
void BoxMinsUpdated()
```

### DefaultAnisotropyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L112)

```csharp
void DefaultAnisotropyUpdated()
```

### DefaultDrawDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L114)

```csharp
void DefaultDrawDistanceUpdated()
```

### DefaultScatteringUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L113)

```csharp
void DefaultScatteringUpdated()
```

### DrawDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L94)

```csharp
void DrawDistanceUpdated()
```

### EnableIndirectUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L116)

```csharp
void EnableIndirectUpdated()
```

### FadeInEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L96)

```csharp
void FadeInEndUpdated()
```

### FadeInStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L95)

```csharp
void FadeInStartUpdated()
```

### FadeSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L93)

```csharp
void FadeSpeedUpdated()
```

### FirstVolumeSliceThicknessUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L99)

```csharp
void FirstVolumeSliceThicknessUpdated()
```

### FogIndirectTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L118)

```csharp
void FogIndirectTextureUpdated()
```

### ForceRefreshCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L119)

```csharp
void ForceRefreshCountUpdated()
```

### IndirectStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L97)

```csharp
void IndirectStrengthUpdated()
```

### IndirectTextureDimXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L100)

```csharp
void IndirectTextureDimXUpdated()
```

### IndirectTextureDimYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L101)

```csharp
void IndirectTextureDimYUpdated()
```

### IndirectTextureDimZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L102)

```csharp
void IndirectTextureDimZUpdated()
```

### IsMasterUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L117)

```csharp
void IsMasterUpdated()
```

### NoiseScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L122)

```csharp
void NoiseScaleUpdated()
```

### NoiseSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L120)

```csharp
void NoiseSpeedUpdated()
```

### NoiseStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L121)

```csharp
void NoiseStrengthUpdated()
```

### ScatteringUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L90)

```csharp
void ScatteringUpdated()
```

### StartAnisoTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L106)

```csharp
void StartAnisoTimeUpdated()
```

### StartAnisotropyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L109)

```csharp
void StartAnisotropyUpdated()
```

### StartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L115)

```csharp
void StartDisabledUpdated()
```

### StartDrawDistanceTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L108)

```csharp
void StartDrawDistanceTimeUpdated()
```

### StartDrawDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L111)

```csharp
void StartDrawDistanceUpdated()
```

### StartScatterTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L107)

```csharp
void StartScatterTimeUpdated()
```

### StartScatteringUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L110)

```csharp
void StartScatteringUpdated()
```

### TintColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L91)

```csharp
void TintColorUpdated()
```

### VolumeDepthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L98)

```csharp
void VolumeDepthUpdated()
```

### WindDirectionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L124)

```csharp
void WindDirectionUpdated()
```

### WindSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogController.cs#L123)

```csharp
void WindSpeedUpdated()
```

