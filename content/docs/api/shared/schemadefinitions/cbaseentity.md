---
title: CBaseEntity
---

```csharp
public interface CBaseEntity : CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AbsOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L15)

```csharp
Vector? AbsOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)?

### AbsRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L19)

```csharp
QAngle? AbsRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)?

### AbsVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L106)

```csharp
ref Vector AbsVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ActualGravityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L140)

```csharp
ref float ActualGravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ActualMoveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L56)

```csharp
ref MoveType_t ActualMoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/shared/schemadefinitions/movetype_t)

### AngVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L162)

```csharp
ref QAngle AngVelocity { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### AnimTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L74)

```csharp
ref float AnimTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimatedEveryTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L138)

```csharp
ref bool AnimatedEveryTick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BaseVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L110)

```csharp
ref Vector BaseVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Blocker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L168)

```csharp
ref CHandle<CBaseEntity> Blocker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### BloodType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L174)

```csharp
ref BloodType BloodType { get; }
```

#### Property Value

- [BloodType](/docs/api/shared/schemadefinitions/bloodtype)

### CBodyComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L17)

```csharp
CBodyComponent? CBodyComponent { get; }
```

#### Property Value

- [CBodyComponent](/docs/api/shared/schemadefinitions/cbodycomponent)?

### ClientSideRagdoll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L80)

```csharp
ref bool ClientSideRagdoll { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Collision

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L114)

```csharp
CCollisionProperty? Collision { get; }
```

#### Property Value

- [CCollisionProperty](/docs/api/shared/schemadefinitions/ccollisionproperty)?

### CreateTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L78)

```csharp
GameTime_t CreateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### CurrentThinkContext

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L23)

```csharp
ref int CurrentThinkContext { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DamageAccumulator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L44)

```csharp
ref float DamageAccumulator { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageFilter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L66)

```csharp
ref CHandle<CBaseFilter> DamageFilter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseFilter](/docs/api/shared/schemadefinitions/cbasefilter)>

### DamageFilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L68)

```csharp
string DamageFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DisableLowViolence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L144)

```csharp
ref bool DisableLowViolence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisabledContextThinks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L27)

```csharp
ref bool DisabledContextThinks { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L148)

```csharp
ref int EFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EffectEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L116)

```csharp
ref CHandle<CBaseEntity> EffectEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Effects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L120)

```csharp
ref uint Effects { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Elasticity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L128)

```csharp
ref float Elasticity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L104)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Friction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L126)

```csharp
ref float Friction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Globalname

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L88)

```csharp
string Globalname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GravityActuallyDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L142)

```csharp
ref bool GravityActuallyDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GravityDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L136)

```csharp
ref bool GravityDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GravityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L130)

```csharp
ref float GravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroundBodyIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L124)

```csharp
ref int GroundBodyIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GroundEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L122)

```csharp
ref CHandle<CBaseEntity> GroundEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Health

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L38)

```csharp
ref int Health { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitialTeamNum

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L158)

```csharp
ref int InitialTeamNum { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InterpolationFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L82)

```csharp
ref byte InterpolationFrame { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### IsSteadyState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L30)

```csharp
SchemaUntypedField IsSteadyState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### LagCompensate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L166)

```csharp
ref bool LagCompensate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastNetworkChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L32)

```csharp
ref float LastNetworkChange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastThinkTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L25)

```csharp
GameTick_t LastThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### LifeState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L42)

```csharp
ref byte LifeState { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LocalTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L170)

```csharp
ref float LocalTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxHealth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L40)

```csharp
ref int MaxHealth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MoveCollide

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L52)

```csharp
ref MoveCollide_t MoveCollide { get; }
```

#### Property Value

- [MoveCollide_t](/docs/api/shared/schemadefinitions/movecollide_t)

### MoveDoneTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L70)

```csharp
ref float MoveDoneTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L54)

```csharp
ref MoveType_t MoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/shared/schemadefinitions/movetype_t)

### NavIgnoreUntilTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L160)

```csharp
GameTime_t NavIgnoreUntilTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NetworkQuantizeOriginAndAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L164)

```csharp
ref bool NetworkQuantizeOriginAndAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkTransmitComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L19)

```csharp
CNetworkTransmitComponent NetworkTransmitComponent { get; }
```

#### Property Value

- [CNetworkTransmitComponent](/docs/api/shared/schemadefinitions/cnetworktransmitcomponent)

### NextThinkTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L98)

```csharp
GameTick_t NextThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### OnKilled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L102)

```csharp
CEntityIOOutput OnKilled { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnUser1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L150)

```csharp
CEntityIOOutput OnUser1 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnUser2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L152)

```csharp
CEntityIOOutput OnUser2 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnUser3

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L154)

```csharp
CEntityIOOutput OnUser3 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnUser4

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L156)

```csharp
CEntityIOOutput OnUser4 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OwnerEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L118)

```csharp
ref CHandle<CBaseEntity> OwnerEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### PlatformType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L50)

```csharp
ref EntityPlatformTypes_t PlatformType { get; }
```

#### Property Value

- [EntityPlatformTypes_t](/docs/api/shared/schemadefinitions/entityplatformtypes_t)

### PrevVPhysicsUpdatePos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L84)

```csharp
ref Vector PrevVPhysicsUpdatePos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PulseGraphInstance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L176)

```csharp
CPulseGraphInstance_ServerEntity? PulseGraphInstance { get; }
```

#### Property Value

- [CPulseGraphInstance_ServerEntity](/docs/api/shared/schemadefinitions/cpulsegraphinstance_serverentity)?

### PushEnumCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L112)

```csharp
ref int PushEnumCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ResponseContext

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L36)

```csharp
string ResponseContext { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseContexts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L34)

```csharp
ref CUtlVector<ResponseContext_t> ResponseContexts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ResponseContext_t](/docs/api/shared/schemadefinitions/responsecontext_t)>

### RestoreInHierarchy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L62)

```csharp
ref bool RestoreInHierarchy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SentToClients

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L90)

```csharp
ref int SentToClients { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SimulationTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L100)

```csharp
ref int SimulationTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SimulationTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L76)

```csharp
ref float SimulationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlimeTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L60)

```csharp
ref byte SlimeTouch { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Spawnflags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L96)

```csharp
ref uint Spawnflags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Speed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L92)

```csharp
ref float Speed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SubclassID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L72)

```csharp
ref CUtlStringToken SubclassID { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### TakeDamageFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L48)

```csharp
ref TakeDamageFlags_t TakeDamageFlags { get; }
```

#### Property Value

- [TakeDamageFlags_t](/docs/api/shared/schemadefinitions/takedamageflags_t)

### TakesDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L46)

```csharp
ref bool TakesDamage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L64)

```csharp
string Target { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TeamNum

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L86)

```csharp
ref byte TeamNum { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ThinkFunctions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L21)

```csharp
ref CUtlVector<thinkfunc_t> ThinkFunctions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[thinkfunc_t](/docs/api/shared/schemadefinitions/thinkfunc_t)>

### TimeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L132)

```csharp
ref float TimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UniqueHammerID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L94)

```csharp
string UniqueHammerID { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L10)

```csharp
CEntitySubclassVDataBase VData { get; }
```

#### Property Value

- [CEntitySubclassVDataBase](/docs/api/shared/schemadefinitions/centitysubclassvdatabase)

### VPhysicsUpdateLocalTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L172)

```csharp
ref float VPhysicsUpdateLocalTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Velocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L108)

```csharp
CNetworkVelocityVector Velocity { get; }
```

#### Property Value

- [CNetworkVelocityVector](/docs/api/shared/schemadefinitions/cnetworkvelocityvector)

### WaterLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L134)

```csharp
ref float WaterLevel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WaterTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L58)

```csharp
ref byte WaterTouch { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### WaterType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L146)

```csharp
ref byte WaterType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### AnimTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L188)

```csharp
void AnimTimeUpdated()
```

### AnimatedEveryTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L211)

```csharp
void AnimatedEveryTickUpdated()
```

### BaseVelocityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L199)

```csharp
void BaseVelocityUpdated()
```

### BloodTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L213)

```csharp
void BloodTypeUpdated()
```

### CBodyComponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L178)

```csharp
void CBodyComponentUpdated()
```

### ClientSideRagdollUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L191)

```csharp
void ClientSideRagdollUpdated()
```

### CollisionRulesChanged()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L35)

```csharp
void CollisionRulesChanged()
```

### CreateTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L190)

```csharp
void CreateTimeUpdated()
```

### EffectEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L200)

```csharp
void EffectEntityUpdated()
```

### EffectsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L202)

```csharp
void EffectsUpdated()
```

### ElasticityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L206)

```csharp
void ElasticityUpdated()
```

### FlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L197)

```csharp
void FlagsUpdated()
```

### FrictionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L205)

```csharp
void FrictionUpdated()
```

### GravityDisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L210)

```csharp
void GravityDisabledUpdated()
```

### GravityScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L207)

```csharp
void GravityScaleUpdated()
```

### GroundBodyIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L204)

```csharp
void GroundBodyIndexUpdated()
```

### GroundEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L203)

```csharp
void GroundEntityUpdated()
```

### HealthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L179)

```csharp
void HealthUpdated()
```

### InterpolationFrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L192)

```csharp
void InterpolationFrameUpdated()
```

### LifeStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L181)

```csharp
void LifeStateUpdated()
```

### MaxHealthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L180)

```csharp
void MaxHealthUpdated()
```

### MoveCollideUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L185)

```csharp
void MoveCollideUpdated()
```

### MoveTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L186)

```csharp
void MoveTypeUpdated()
```

### NavIgnoreUntilTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L212)

```csharp
void NavIgnoreUntilTimeUpdated()
```

### NextThinkTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L196)

```csharp
void NextThinkTickUpdated()
```

### OwnerEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L201)

```csharp
void OwnerEntityUpdated()
```

### PlatformTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L184)

```csharp
void PlatformTypeUpdated()
```

### SimulationTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L189)

```csharp
void SimulationTimeUpdated()
```

### SpawnflagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L195)

```csharp
void SpawnflagsUpdated()
```

### SpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L194)

```csharp
void SpeedUpdated()
```

### SubclassIDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L187)

```csharp
void SubclassIDUpdated()
```

### TakeDamageFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L183)

```csharp
void TakeDamageFlagsUpdated()
```

### TakesDamageUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L182)

```csharp
void TakesDamageUpdated()
```

### TeamNumUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L193)

```csharp
void TeamNumUpdated()
```

### Teleport(Vector?, QAngle?, Vector?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBaseEntity.cs#L28)

```csharp
void Teleport(Vector? position, QAngle? angle, Vector? velocity)
```

#### Parameters

- **position**: [Vector](/docs/api/shared/natives/vector)? - The target position to move the entity to. If null, the entity's position is not changed.
- **angle**: [QAngle](/docs/api/shared/natives/qangle)? - The target orientation to set for the entity. If null, the entity's orientation is not changed.
- **velocity**: [Vector](/docs/api/shared/natives/vector)? - The velocity to apply to the entity after teleportation. If null, the entity's velocity is not changed.

#### Remarks

### TimeScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L208)

```csharp
void TimeScaleUpdated()
```

### VelocityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L198)

```csharp
void VelocityUpdated()
```

### WaterLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseEntity.cs#L209)

```csharp
void WaterLevelUpdated()
```

