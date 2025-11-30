---
title: CChicken
---

# Interface CChicken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CChicken : CDynamicProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CDynamicProp>, ISchemaClass<CChicken>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CDynamicProp](/docs/api/schemadefinitions/cdynamicprop)
- [CBreakableProp](/docs/api/schemadefinitions/cbreakableprop)
- [CBaseProp](/docs/api/schemadefinitions/cbaseprop)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBreakableProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDynamicProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CChicken>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveFollowStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L68)

```csharp
GameTime_t ActiveFollowStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ActivityTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L36)

```csharp
CountdownTimer ActivityTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### AttributeManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L18)

```csharp
CAttributeContainer AttributeManager { get; }
```

#### Property Value

- [CAttributeContainer](/docs/api/schemadefinitions/cattributecontainer)

### BlockDirectionTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L72)

```csharp
CountdownTimer BlockDirectionTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### CollisionStuckTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L26)

```csharp
CountdownTimer CollisionStuckTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### CurrentActivity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L34)

```csharp
ref ChickenActivity CurrentActivity { get; }
```

#### Property Value

- [ChickenActivity](/docs/api/schemadefinitions/chickenactivity)

### DesiredActivity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L32)

```csharp
ref ChickenActivity DesiredActivity { get; }
```

#### Property Value

- [ChickenActivity](/docs/api/schemadefinitions/chickenactivity)

### FallVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L30)

```csharp
ref Vector FallVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### FleeFrom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L40)

```csharp
ref CHandle<CBaseEntity> FleeFrom { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### FollowMinuteTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L70)

```csharp
CountdownTimer FollowMinuteTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### HasBeenUsed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L56)

```csharp
ref bool HasBeenUsed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L62)

```csharp
ref bool InJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOnGround

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L28)

```csharp
ref bool IsOnGround { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L58)

```csharp
CountdownTimer JumpTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### JumpedThisFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L50)

```csharp
ref bool JumpedThisFrame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastJumpTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L60)

```csharp
ref float LastJumpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Leader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L52)

```csharp
ref CHandle<CCSPlayerPawn> Leader { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### MoveRateThrottleTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L42)

```csharp
CountdownTimer MoveRateThrottleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### PathGoal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L66)

```csharp
ref Vector PathGoal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RepathTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L64)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### ReuseTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L54)

```csharp
CountdownTimer ReuseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### StartleTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L44)

```csharp
CountdownTimer StartleTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### StuckAnchor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L22)

```csharp
ref Vector StuckAnchor { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StuckTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L24)

```csharp
CountdownTimer StuckTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### TurnRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L38)

```csharp
ref float TurnRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UpdateTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L20)

```csharp
CountdownTimer UpdateTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### VocalizeTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L46)

```csharp
CountdownTimer VocalizeTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### WhenZombified

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L48)

```csharp
GameTime_t WhenZombified { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

## Methods

### AttributeManagerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L74)

```csharp
void AttributeManagerUpdated()
```

### JumpedThisFrameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L75)

```csharp
void JumpedThisFrameUpdated()
```

### LeaderUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChicken.cs#L76)

```csharp
void LeaderUpdated()
```

