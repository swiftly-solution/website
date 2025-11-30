---
title: CBasePlayerPawn
---

# Interface CBasePlayerPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBasePlayerPawn : CBaseCombatCharacter, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaClass<CBasePlayerPawn>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseCombatCharacter](/docs/api/schemadefinitions/cbasecombatcharacter)
- [CBaseFlex](/docs/api/schemadefinitions/cbaseflex)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseFlex>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCombatCharacter>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerPawn>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AutoaimServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L22)

```csharp
CPlayer_AutoaimServices? AutoaimServices { get; }
```

#### Property Value

- [CPlayer_AutoaimServices](/docs/api/schemadefinitions/cplayer_autoaimservices)?

### CameraServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L32)

```csharp
CPlayer_CameraServices? CameraServices { get; }
```

#### Property Value

- [CPlayer_CameraServices](/docs/api/schemadefinitions/cplayer_cameraservices)?

### Controller

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L56)

```csharp
ref CHandle<CBasePlayerController> Controller { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)>

### DeathTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L48)

```csharp
GameTime_t DeathTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### DefaultController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L58)

```csharp
ref CHandle<CBasePlayerController> DefaultController { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)>

### Expresser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L54)

```csharp
CAI_Expresser? Expresser { get; }
```

#### Property Value

- [CAI_Expresser](/docs/api/schemadefinitions/cai_expresser)?

### EyePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L7)

```csharp
Vector? EyePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)?

### FlashlightServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L30)

```csharp
CPlayer_FlashlightServices? FlashlightServices { get; }
```

#### Property Value

- [CPlayer_FlashlightServices](/docs/api/schemadefinitions/cplayer_flashlightservices)?

### GroundDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L8)

```csharp
float GroundDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HideHUD

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L42)

```csharp
ref uint HideHUD { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HltvReplayDelay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L60)

```csharp
ref float HltvReplayDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HltvReplayEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L62)

```csharp
ref float HltvReplayEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HltvReplayEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L64)

```csharp
ref uint HltvReplayEntity { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### InitHUD

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L52)

```csharp
ref bool InitHUD { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InteractsAs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L10)

```csharp
MaskTrace InteractsAs { get; }
```

#### Property Value

- [MaskTrace](/docs/api/natives/masktrace)

### InteractsExclude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L11)

```csharp
MaskTrace InteractsExclude { get; }
```

#### Property Value

- [MaskTrace](/docs/api/natives/masktrace)

### InteractsWith

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L9)

```csharp
MaskTrace InteractsWith { get; }
```

#### Property Value

- [MaskTrace](/docs/api/natives/masktrace)

### ItemServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L20)

```csharp
CPlayer_ItemServices? ItemServices { get; }
```

#### Property Value

- [CPlayer_ItemServices](/docs/api/schemadefinitions/cplayer_itemservices)?

### MovementServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L34)

```csharp
CPlayer_MovementServices? MovementServices { get; }
```

#### Property Value

- [CPlayer_MovementServices](/docs/api/schemadefinitions/cplayer_movementservices)?

### NextSuicideTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L50)

```csharp
GameTime_t NextSuicideTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ObserverServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L24)

```csharp
CPlayer_ObserverServices? ObserverServices { get; }
```

#### Property Value

- [CPlayer_ObserverServices](/docs/api/schemadefinitions/cplayer_observerservices)?

### ServerViewAngleChanges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L36)

```csharp
ref CUtlVector<ViewAngleServerChange_t> ServerViewAngleChanges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ViewAngleServerChange_t](/docs/api/schemadefinitions/viewangleserverchange_t)>

### Skybox3d

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L44)

```csharp
sky3dparams_t Skybox3d { get; }
```

#### Property Value

- [sky3dparams_t](/docs/api/schemadefinitions/sky3dparams_t)

### SndOpvarLatchData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L66)

```csharp
ref CUtlVector<sndopvarlatchdata_t> SndOpvarLatchData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[sndopvarlatchdata_t](/docs/api/schemadefinitions/sndopvarlatchdata_t)>

### TimeLastHurt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L46)

```csharp
GameTime_t TimeLastHurt { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### UseServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L28)

```csharp
CPlayer_UseServices? UseServices { get; }
```

#### Property Value

- [CPlayer_UseServices](/docs/api/schemadefinitions/cplayer_useservices)?

### V_angle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L38)

```csharp
ref QAngle V_angle { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### V_anglePrevious

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L40)

```csharp
ref QAngle V_anglePrevious { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### WaterServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L26)

```csharp
CPlayer_WaterServices? WaterServices { get; }
```

#### Property Value

- [CPlayer_WaterServices](/docs/api/schemadefinitions/cplayer_waterservices)?

### WeaponServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L18)

```csharp
CPlayer_WeaponServices? WeaponServices { get; }
```

#### Property Value

- [CPlayer_WeaponServices](/docs/api/schemadefinitions/cplayer_weaponservices)?

## Methods

### AutoaimServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L70)

```csharp
void AutoaimServicesUpdated()
```

### CameraServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L75)

```csharp
void CameraServicesUpdated()
```

### CommitSuicide(bool, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L16)

Performs a suicide on the pawn, optionally causing an explosion and allowing forced execution.

```csharp
void CommitSuicide(bool explode, bool force)
```

#### Parameters

- **explode**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **force**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ControllerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L81)

```csharp
void ControllerUpdated()
```

### DeathTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L80)

```csharp
void DeathTimeUpdated()
```

### DefaultControllerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L82)

```csharp
void DefaultControllerUpdated()
```

### FlashlightServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L74)

```csharp
void FlashlightServicesUpdated()
```

### HasLineOfSight(CCSPlayerPawn, float?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerPawn.cs#L25)

Checks if the target player is within the line of sight of this player.
Performs both physical obstruction check and field of view validation.

```csharp
bool HasLineOfSight(CCSPlayerPawn targetPlayer, float? fieldOfViewDegrees = null)
```

#### Parameters

- **targetPlayer**: [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn) - The target player to check visibility for.
- **fieldOfViewDegrees**: [float](https://learn.microsoft.com/dotnet/api/system.single)? - Optional field of view in degrees.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the target player is visible; otherwise, false.

### HideHUDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L78)

```csharp
void HideHUDUpdated()
```

### ItemServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L69)

```csharp
void ItemServicesUpdated()
```

### MovementServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L76)

```csharp
void MovementServicesUpdated()
```

### ObserverServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L71)

```csharp
void ObserverServicesUpdated()
```

### ServerViewAngleChangesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L77)

```csharp
void ServerViewAngleChangesUpdated()
```

### Skybox3dUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L79)

```csharp
void Skybox3dUpdated()
```

### UseServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L73)

```csharp
void UseServicesUpdated()
```

### WaterServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L72)

```csharp
void WaterServicesUpdated()
```

### WeaponServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerPawn.cs#L68)

```csharp
void WeaponServicesUpdated()
```

