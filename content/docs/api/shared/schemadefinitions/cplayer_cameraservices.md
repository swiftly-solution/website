---
title: CPlayer_CameraServices
---

```csharp
public interface CPlayer_CameraServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_CameraServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Audio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L30)

```csharp
audioparams_t Audio { get; }
```

#### Property Value

- [audioparams_t](/docs/api/shared/schemadefinitions/audioparams_t)

### ColorCorrectionCtrl

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L24)

```csharp
ref CHandle<CColorCorrection> ColorCorrectionCtrl { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CColorCorrection](/docs/api/shared/schemadefinitions/ccolorcorrection)>

### CsViewPunchAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L16)

```csharp
ref QAngle CsViewPunchAngle { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### CsViewPunchAngleTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L18)

```csharp
GameTick_t CsViewPunchAngleTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### CsViewPunchAngleTickRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L20)

```csharp
ref float CsViewPunchAngleTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldPlayerViewOffsetZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L36)

```csharp
ref float OldPlayerViewOffsetZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldPlayerZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L34)

```csharp
ref float OldPlayerZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerFog

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L22)

```csharp
fogplayerparams_t PlayerFog { get; }
```

#### Property Value

- [fogplayerparams_t](/docs/api/shared/schemadefinitions/fogplayerparams_t)

### PostProcessingVolumes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L32)

```csharp
ref CUtlVector<CHandle<CPostProcessingVolume>> PostProcessingVolumes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CPostProcessingVolume](/docs/api/shared/schemadefinitions/cpostprocessingvolume)>>

### TonemapController

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L28)

```csharp
ref CHandle<CTonemapController2> TonemapController { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CTonemapController2](/docs/api/shared/schemadefinitions/ctonemapcontroller2)>

### TriggerSoundscapeList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L38)

```csharp
ref CUtlVector<CHandle<CEnvSoundscapeTriggerable>> TriggerSoundscapeList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CEnvSoundscapeTriggerable](/docs/api/shared/schemadefinitions/cenvsoundscapetriggerable)>>

### ViewEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L26)

```csharp
ref CHandle<CBaseEntity> ViewEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

## Methods

### AudioUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L47)

```csharp
void AudioUpdated()
```

### ColorCorrectionCtrlUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L44)

```csharp
void ColorCorrectionCtrlUpdated()
```

### CsViewPunchAngleTickRatioUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L42)

```csharp
void CsViewPunchAngleTickRatioUpdated()
```

### CsViewPunchAngleTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L41)

```csharp
void CsViewPunchAngleTickUpdated()
```

### CsViewPunchAngleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L40)

```csharp
void CsViewPunchAngleUpdated()
```

### PlayerFogUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L43)

```csharp
void PlayerFogUpdated()
```

### PostProcessingVolumesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L48)

```csharp
void PostProcessingVolumesUpdated()
```

### TonemapControllerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L46)

```csharp
void TonemapControllerUpdated()
```

### ViewEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_CameraServices.cs#L45)

```csharp
void ViewEntityUpdated()
```

