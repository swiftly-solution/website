---
title: CDestructiblePart_DamageLevel
---

# Interface CDestructiblePart_DamageLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDestructiblePart_DamageLevel : ISchemaClass<CDestructiblePart_DamageLevel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CDestructiblePart_DamageLevel>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodyGroupValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L22)

```csharp
ref int BodyGroupValue { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BreakablePieceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L20)

```csharp
ref CGlobalSymbol BreakablePieceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### CriticalDamagePercent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L26)

```csharp
ref float CriticalDamagePercent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CustomDeathHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L32)

```csharp
ref CGlobalSymbol CustomDeathHandshake { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### DamagePassthroughType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L28)

```csharp
ref EDestructiblePartDamagePassThroughType DamagePassthroughType { get; }
```

#### Property Value

- [EDestructiblePartDamagePassThroughType](/docs/api/schemadefinitions/edestructiblepartdamagepassthroughtype)

### DeathDestroyTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L36)

```csharp
CRangeFloat DeathDestroyTime { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### DestructionDeathBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L30)

```csharp
ref DestructiblePartDestructionDeathBehavior_t DestructionDeathBehavior { get; }
```

#### Property Value

- [DestructiblePartDestructionDeathBehavior_t](/docs/api/schemadefinitions/destructiblepartdestructiondeathbehavior_t)

### Health

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L24)

```csharp
CSkillInt Health { get; }
```

#### Property Value

- [CSkillInt](/docs/api/schemadefinitions/cskillint)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShouldDestroyOnDeath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L34)

```csharp
ref bool ShouldDestroyOnDeath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

