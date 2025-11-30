---
title: CPlayer_CameraServices
---

# Interface CPlayer_CameraServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayer_CameraServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_CameraServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_CameraServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Audio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L32)

```csharp
audioparams_t Audio { get; }
```

#### Property Value

- [audioparams_t](/docs/api/schemadefinitions/audioparams_t)

### ColorCorrectionCtrl

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L26)

```csharp
ref CHandle<CColorCorrection> ColorCorrectionCtrl { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CColorCorrection](/docs/api/schemadefinitions/ccolorcorrection)>

### CsViewPunchAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L18)

```csharp
ref QAngle CsViewPunchAngle { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### CsViewPunchAngleTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L20)

```csharp
GameTick_t CsViewPunchAngleTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### CsViewPunchAngleTickRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L22)

```csharp
ref float CsViewPunchAngleTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldPlayerViewOffsetZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L38)

```csharp
ref float OldPlayerViewOffsetZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldPlayerZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L36)

```csharp
ref float OldPlayerZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerFog

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L24)

```csharp
fogplayerparams_t PlayerFog { get; }
```

#### Property Value

- [fogplayerparams_t](/docs/api/schemadefinitions/fogplayerparams_t)

### PostProcessingVolumes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L34)

```csharp
ref CUtlVector<CHandle<CPostProcessingVolume>> PostProcessingVolumes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CPostProcessingVolume](/docs/api/schemadefinitions/cpostprocessingvolume)>>

### TonemapController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L30)

```csharp
ref CHandle<CTonemapController2> TonemapController { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CTonemapController2](/docs/api/schemadefinitions/ctonemapcontroller2)>

### TriggerSoundscapeList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L40)

```csharp
ref CUtlVector<CHandle<CEnvSoundscapeTriggerable>> TriggerSoundscapeList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CEnvSoundscapeTriggerable](/docs/api/schemadefinitions/cenvsoundscapetriggerable)>>

### ViewEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L28)

```csharp
ref CHandle<CBaseEntity> ViewEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

## Methods

### AudioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L49)

```csharp
void AudioUpdated()
```

### ColorCorrectionCtrlUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L46)

```csharp
void ColorCorrectionCtrlUpdated()
```

### CsViewPunchAngleTickRatioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L44)

```csharp
void CsViewPunchAngleTickRatioUpdated()
```

### CsViewPunchAngleTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L43)

```csharp
void CsViewPunchAngleTickUpdated()
```

### CsViewPunchAngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L42)

```csharp
void CsViewPunchAngleUpdated()
```

### PlayerFogUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L45)

```csharp
void PlayerFogUpdated()
```

### PostProcessingVolumesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L50)

```csharp
void PostProcessingVolumesUpdated()
```

### TonemapControllerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L48)

```csharp
void TonemapControllerUpdated()
```

### ViewEntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L47)

```csharp
void ViewEntityUpdated()
```

