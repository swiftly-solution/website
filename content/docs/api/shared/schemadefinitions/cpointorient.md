---
title: CPointOrient
---

```csharp
public interface CPointOrient : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointOrient>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Active

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L21)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Constraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L25)

```csharp
ref PointOrientConstraint_t Constraint { get; }
```

#### Property Value

- [PointOrientConstraint_t](/docs/api/shared/schemadefinitions/pointorientconstraint_t)

### GoalDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L23)

```csharp
ref PointOrientGoalDirectionType_t GoalDirection { get; }
```

#### Property Value

- [PointOrientGoalDirectionType_t](/docs/api/shared/schemadefinitions/pointorientgoaldirectiontype_t)

### LastGameTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L29)

```csharp
GameTime_t LastGameTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MaxTurnRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L27)

```csharp
ref float MaxTurnRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpawnTargetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L17)

```csharp
string SpawnTargetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointOrient.cs#L19)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

