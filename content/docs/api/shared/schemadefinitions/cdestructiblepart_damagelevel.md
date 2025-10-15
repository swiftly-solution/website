---
title: CDestructiblePart_DamageLevel
---

```csharp
public interface CDestructiblePart_DamageLevel : ISchemaClass<CDestructiblePart_DamageLevel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BodyGroupValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L21)

```csharp
ref int BodyGroupValue { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BreakablePieceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L19)

```csharp
ref CGlobalSymbol BreakablePieceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### CriticalDamagePercent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L25)

```csharp
ref float CriticalDamagePercent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CustomDeathHandshake

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L31)

```csharp
ref CGlobalSymbol CustomDeathHandshake { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### DamagePassthroughType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L27)

```csharp
ref EDestructiblePartDamagePassThroughType DamagePassthroughType { get; }
```

#### Property Value

- [EDestructiblePartDamagePassThroughType](/docs/api/shared/schemadefinitions/edestructiblepartdamagepassthroughtype)

### DeathDestroyTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L35)

```csharp
CRangeFloat DeathDestroyTime { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### DestructionDeathBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L29)

```csharp
ref DestructiblePartDestructionDeathBehavior_t DestructionDeathBehavior { get; }
```

#### Property Value

- [DestructiblePartDestructionDeathBehavior_t](/docs/api/shared/schemadefinitions/destructiblepartdestructiondeathbehavior_t)

### Health

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L23)

```csharp
CSkillInt Health { get; }
```

#### Property Value

- [CSkillInt](/docs/api/shared/schemadefinitions/cskillint)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L17)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShouldDestroyOnDeath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L33)

```csharp
ref bool ShouldDestroyOnDeath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

