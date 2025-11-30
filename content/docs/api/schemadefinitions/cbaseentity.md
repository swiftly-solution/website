---
title: CBaseEntity
---

# Interface CBaseEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseEntity : CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AbsOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L16)

Gets the absolute origin position of the entity.

```csharp
Vector? AbsOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)?

### AbsRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L20)

Gets the absolute rotation of the entity.

```csharp
QAngle? AbsRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)?

### AbsVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L107)

```csharp
ref Vector AbsVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ActualGravityScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L141)

```csharp
ref float ActualGravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ActualMoveType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L57)

```csharp
ref MoveType_t ActualMoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/schemadefinitions/movetype_t)

### AngVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L163)

```csharp
ref QAngle AngVelocity { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AnimTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L75)

```csharp
ref float AnimTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimatedEveryTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L139)

```csharp
ref bool AnimatedEveryTick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BaseVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L111)

```csharp
ref Vector BaseVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Blocker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L169)

```csharp
ref CHandle<CBaseEntity> Blocker { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### BloodType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L175)

```csharp
ref BloodType BloodType { get; }
```

#### Property Value

- [BloodType](/docs/api/schemadefinitions/bloodtype)

### CBodyComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L18)

```csharp
CBodyComponent? CBodyComponent { get; }
```

#### Property Value

- [CBodyComponent](/docs/api/schemadefinitions/cbodycomponent)?

### ClientSideRagdoll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L81)

```csharp
ref bool ClientSideRagdoll { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Collision

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L115)

```csharp
CCollisionProperty? Collision { get; }
```

#### Property Value

- [CCollisionProperty](/docs/api/schemadefinitions/ccollisionproperty)?

### CreateTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L79)

```csharp
GameTime_t CreateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### CurrentThinkContext

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L24)

```csharp
ref int CurrentThinkContext { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DamageAccumulator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L45)

```csharp
ref float DamageAccumulator { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageFilter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L67)

```csharp
ref CHandle<CBaseFilter> DamageFilter { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseFilter](/docs/api/schemadefinitions/cbasefilter)>

### DamageFilterName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L69)

```csharp
string DamageFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DisableLowViolence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L145)

```csharp
ref bool DisableLowViolence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisabledContextThinks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L28)

```csharp
ref bool DisabledContextThinks { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L149)

```csharp
ref int EFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EffectEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L117)

```csharp
ref CHandle<CBaseEntity> EffectEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### Effects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L121)

```csharp
ref uint Effects { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Elasticity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L129)

```csharp
ref float Elasticity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L105)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Friction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L127)

```csharp
ref float Friction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Globalname

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L89)

```csharp
string Globalname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GravityActuallyDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L143)

```csharp
ref bool GravityActuallyDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GravityDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L137)

```csharp
ref bool GravityDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GravityScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L131)

```csharp
ref float GravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroundBodyIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L125)

```csharp
ref int GroundBodyIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GroundEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L123)

```csharp
ref CHandle<CBaseEntity> GroundEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### Health

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L39)

```csharp
ref int Health { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitialTeamNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L159)

```csharp
ref int InitialTeamNum { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InterpolationFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L83)

```csharp
ref byte InterpolationFrame { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### IsSteadyState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L31)

```csharp
SchemaUntypedField IsSteadyState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### LagCompensate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L167)

```csharp
ref bool LagCompensate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastNetworkChange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L33)

```csharp
ref float LastNetworkChange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastThinkTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L26)

```csharp
GameTick_t LastThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### LifeState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L43)

```csharp
ref byte LifeState { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LocalTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L171)

```csharp
ref float LocalTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxHealth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L41)

```csharp
ref int MaxHealth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MoveCollide

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L53)

```csharp
ref MoveCollide_t MoveCollide { get; }
```

#### Property Value

- [MoveCollide_t](/docs/api/schemadefinitions/movecollide_t)

### MoveDoneTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L71)

```csharp
ref float MoveDoneTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L55)

```csharp
ref MoveType_t MoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/schemadefinitions/movetype_t)

### NavIgnoreUntilTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L161)

```csharp
GameTime_t NavIgnoreUntilTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### NetworkQuantizeOriginAndAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L165)

```csharp
ref bool NetworkQuantizeOriginAndAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkTransmitComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L20)

```csharp
CNetworkTransmitComponent NetworkTransmitComponent { get; }
```

#### Property Value

- [CNetworkTransmitComponent](/docs/api/schemadefinitions/cnetworktransmitcomponent)

### NextThinkTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L99)

```csharp
GameTick_t NextThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### OnKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L103)

```csharp
CEntityIOOutput OnKilled { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnUser1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L151)

```csharp
CEntityIOOutput OnUser1 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnUser2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L153)

```csharp
CEntityIOOutput OnUser2 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnUser3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L155)

```csharp
CEntityIOOutput OnUser3 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnUser4

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L157)

```csharp
CEntityIOOutput OnUser4 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OwnerEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L119)

```csharp
ref CHandle<CBaseEntity> OwnerEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### PlatformType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L51)

```csharp
ref EntityPlatformTypes_t PlatformType { get; }
```

#### Property Value

- [EntityPlatformTypes_t](/docs/api/schemadefinitions/entityplatformtypes_t)

### PrevVPhysicsUpdatePos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L85)

```csharp
ref Vector PrevVPhysicsUpdatePos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PulseGraphInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L177)

```csharp
CPulseGraphInstance_ServerEntity? PulseGraphInstance { get; }
```

#### Property Value

- [CPulseGraphInstance_ServerEntity](/docs/api/schemadefinitions/cpulsegraphinstance_serverentity)?

### PushEnumCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L113)

```csharp
ref int PushEnumCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ResponseContext

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L37)

```csharp
string ResponseContext { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseContexts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L35)

```csharp
ref CUtlVector<ResponseContext_t> ResponseContexts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ResponseContext_t](/docs/api/schemadefinitions/responsecontext_t)>

### RestoreInHierarchy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L63)

```csharp
ref bool RestoreInHierarchy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SentToClients

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L91)

```csharp
ref int SentToClients { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SimulationTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L101)

```csharp
ref int SimulationTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SimulationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L77)

```csharp
ref float SimulationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlimeTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L61)

```csharp
ref byte SlimeTouch { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Spawnflags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L97)

```csharp
ref uint Spawnflags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Speed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L93)

```csharp
ref float Speed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SubclassID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L73)

```csharp
ref CUtlStringToken SubclassID { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### TakeDamageFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L49)

```csharp
ref TakeDamageFlags_t TakeDamageFlags { get; }
```

#### Property Value

- [TakeDamageFlags_t](/docs/api/schemadefinitions/takedamageflags_t)

### TakesDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L47)

```csharp
ref bool TakesDamage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L65)

```csharp
string Target { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Team

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L25)

Gets the team of the entity.

```csharp
Team Team { get; set; }
```

#### Property Value

- [Team](/docs/api/players/team)

### TeamNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L87)

```csharp
ref byte TeamNum { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ThinkFunctions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L22)

```csharp
ref CUtlVector<thinkfunc_t> ThinkFunctions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[thinkfunc_t](/docs/api/schemadefinitions/thinkfunc_t)>

### TimeScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L133)

```csharp
ref float TimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UniqueHammerID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L95)

```csharp
string UniqueHammerID { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L11)

Gets the subclass-specific data associated with this entity.

```csharp
CEntitySubclassVDataBase VData { get; }
```

#### Property Value

- [CEntitySubclassVDataBase](/docs/api/schemadefinitions/centitysubclassvdatabase)

### VPhysicsUpdateLocalTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L173)

```csharp
ref float VPhysicsUpdateLocalTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Velocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L109)

```csharp
CNetworkVelocityVector Velocity { get; }
```

#### Property Value

- [CNetworkVelocityVector](/docs/api/schemadefinitions/cnetworkvelocityvector)

### WaterLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L135)

```csharp
ref float WaterLevel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WaterTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L59)

```csharp
ref byte WaterTouch { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### WaterType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L147)

```csharp
ref byte WaterType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### AnimTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L189)

```csharp
void AnimTimeUpdated()
```

### AnimatedEveryTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L212)

```csharp
void AnimatedEveryTickUpdated()
```

### BaseVelocityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L200)

```csharp
void BaseVelocityUpdated()
```

### BloodTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L214)

```csharp
void BloodTypeUpdated()
```

### CBodyComponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L179)

```csharp
void CBodyComponentUpdated()
```

### ClientSideRagdollUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L192)

```csharp
void ClientSideRagdollUpdated()
```

### CollisionRulesChanged()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L42)

Notify the game that the collision rules of the entity have changed.
Call this when you change the Collision of the entity.

```csharp
void CollisionRulesChanged()
```

### CreateTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L191)

```csharp
void CreateTimeUpdated()
```

### EffectEntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L201)

```csharp
void EffectEntityUpdated()
```

### EffectsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L203)

```csharp
void EffectsUpdated()
```

### ElasticityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L207)

```csharp
void ElasticityUpdated()
```

### FlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L198)

```csharp
void FlagsUpdated()
```

### FrictionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L206)

```csharp
void FrictionUpdated()
```

### GravityDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L211)

```csharp
void GravityDisabledUpdated()
```

### GravityScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L208)

```csharp
void GravityScaleUpdated()
```

### GroundBodyIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L205)

```csharp
void GroundBodyIndexUpdated()
```

### GroundEntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L204)

```csharp
void GroundEntityUpdated()
```

### HealthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L180)

```csharp
void HealthUpdated()
```

### InterpolationFrameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L193)

```csharp
void InterpolationFrameUpdated()
```

### LifeStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L182)

```csharp
void LifeStateUpdated()
```

### MaxHealthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L181)

```csharp
void MaxHealthUpdated()
```

### MoveCollideUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L186)

```csharp
void MoveCollideUpdated()
```

### MoveTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L187)

```csharp
void MoveTypeUpdated()
```

### NavIgnoreUntilTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L213)

```csharp
void NavIgnoreUntilTimeUpdated()
```

### NextThinkTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L197)

```csharp
void NextThinkTickUpdated()
```

### OwnerEntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L202)

```csharp
void OwnerEntityUpdated()
```

### PlatformTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L185)

```csharp
void PlatformTypeUpdated()
```

### SimulationTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L190)

```csharp
void SimulationTimeUpdated()
```

### SpawnflagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L196)

```csharp
void SpawnflagsUpdated()
```

### SpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L195)

```csharp
void SpeedUpdated()
```

### SubclassIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L188)

```csharp
void SubclassIDUpdated()
```

### TakeDamageFlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L184)

```csharp
void TakeDamageFlagsUpdated()
```

### TakesDamageUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L183)

```csharp
void TakesDamageUpdated()
```

### TeamNumUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L194)

```csharp
void TeamNumUpdated()
```

### Teleport(Vector?, QAngle?, Vector?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L35)

Teleports the entity to the specified position, orientation, and velocity.

```csharp
void Teleport(Vector? position, QAngle? angle, Vector? velocity)
```

#### Parameters

- **position**: [Vector](/docs/api/natives/vector)? - The target position to move the entity to. If null, the entity's position is not changed.
- **angle**: [QAngle](/docs/api/natives/qangle)? - The target orientation to set for the entity. If null, the entity's orientation is not changed.
- **velocity**: [Vector](/docs/api/natives/vector)? - The velocity to apply to the entity after teleportation. If null, the entity's velocity is not changed.

#### Remarks

Any parameter set to null will leave the corresponding property of the entity unchanged. This
    method can be used to update one or more aspects of the entity's state in a single operation.

### TimeScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L209)

```csharp
void TimeScaleUpdated()
```

### VelocityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L199)

```csharp
void VelocityUpdated()
```

### WaterLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L210)

```csharp
void WaterLevelUpdated()
```

