---
title: CBasePlayerPawn
---

```csharp
public interface CBasePlayerPawn : CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AutoaimServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L20)

```csharp
CPlayer_AutoaimServices? AutoaimServices { get; }
```

#### Property Value

- [CPlayer_AutoaimServices](/docs/api/shared/schemadefinitions/cplayer_autoaimservices)?

### CameraServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L30)

```csharp
CPlayer_CameraServices? CameraServices { get; }
```

#### Property Value

- [CPlayer_CameraServices](/docs/api/shared/schemadefinitions/cplayer_cameraservices)?

### Controller

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L55)

```csharp
ref CHandle<CBasePlayerController> Controller { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)>

### DeathTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L47)

```csharp
GameTime_t DeathTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### DefaultController

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L57)

```csharp
ref CHandle<CBasePlayerController> DefaultController { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)>

### Expresser

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L53)

```csharp
CAI_Expresser? Expresser { get; }
```

#### Property Value

- [CAI_Expresser](/docs/api/shared/schemadefinitions/cai_expresser)?

### FlashlightServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L28)

```csharp
CPlayer_FlashlightServices? FlashlightServices { get; }
```

#### Property Value

- [CPlayer_FlashlightServices](/docs/api/shared/schemadefinitions/cplayer_flashlightservices)?

### HideHUD

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L41)

```csharp
ref uint HideHUD { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HltvReplayDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L59)

```csharp
ref float HltvReplayDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HltvReplayEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L61)

```csharp
ref float HltvReplayEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HltvReplayEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L63)

```csharp
ref uint HltvReplayEntity { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### InitHUD

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L51)

```csharp
ref bool InitHUD { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ItemServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L18)

```csharp
CPlayer_ItemServices? ItemServices { get; }
```

#### Property Value

- [CPlayer_ItemServices](/docs/api/shared/schemadefinitions/cplayer_itemservices)?

### MovementServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L32)

```csharp
CPlayer_MovementServices? MovementServices { get; }
```

#### Property Value

- [CPlayer_MovementServices](/docs/api/shared/schemadefinitions/cplayer_movementservices)?

### NextSuicideTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L49)

```csharp
GameTime_t NextSuicideTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### ObserverServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L22)

```csharp
CPlayer_ObserverServices? ObserverServices { get; }
```

#### Property Value

- [CPlayer_ObserverServices](/docs/api/shared/schemadefinitions/cplayer_observerservices)?

### ServerViewAngleChanges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L35)

```csharp
ref CUtlVector ServerViewAngleChanges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Skybox3d

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L43)

```csharp
sky3dparams_t Skybox3d { get; }
```

#### Property Value

- [sky3dparams_t](/docs/api/shared/schemadefinitions/sky3dparams_t)

### SndOpvarLatchData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L66)

```csharp
ref CUtlVector SndOpvarLatchData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### TimeLastHurt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L45)

```csharp
GameTime_t TimeLastHurt { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### UseServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L26)

```csharp
CPlayer_UseServices? UseServices { get; }
```

#### Property Value

- [CPlayer_UseServices](/docs/api/shared/schemadefinitions/cplayer_useservices)?

### V_angle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L37)

```csharp
ref QAngle V_angle { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### V_anglePrevious

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L39)

```csharp
ref QAngle V_anglePrevious { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### WaterServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L24)

```csharp
CPlayer_WaterServices? WaterServices { get; }
```

#### Property Value

- [CPlayer_WaterServices](/docs/api/shared/schemadefinitions/cplayer_waterservices)?

### WeaponServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L16)

```csharp
CPlayer_WeaponServices? WeaponServices { get; }
```

#### Property Value

- [CPlayer_WeaponServices](/docs/api/shared/schemadefinitions/cplayer_weaponservices)?

## Methods

### AutoaimServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L70)

```csharp
void AutoaimServicesUpdated()
```

### CameraServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L75)

```csharp
void CameraServicesUpdated()
```

### CommitSuicide(bool, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L8)

```csharp
void CommitSuicide(bool explode, bool force)
```

#### Parameters

- **explode**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **force**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ControllerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L81)

```csharp
void ControllerUpdated()
```

### DeathTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L80)

```csharp
void DeathTimeUpdated()
```

### DefaultControllerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L82)

```csharp
void DefaultControllerUpdated()
```

### FlashlightServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L74)

```csharp
void FlashlightServicesUpdated()
```

### HideHUDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L78)

```csharp
void HideHUDUpdated()
```

### ItemServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L69)

```csharp
void ItemServicesUpdated()
```

### MovementServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L76)

```csharp
void MovementServicesUpdated()
```

### ObserverServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L71)

```csharp
void ObserverServicesUpdated()
```

### ServerViewAngleChangesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L77)

```csharp
void ServerViewAngleChangesUpdated()
```

### Skybox3dUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L79)

```csharp
void Skybox3dUpdated()
```

### UseServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L73)

```csharp
void UseServicesUpdated()
```

### WaterServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L72)

```csharp
void WaterServicesUpdated()
```

### WeaponServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L68)

```csharp
void WeaponServicesUpdated()
```

