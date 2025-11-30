---
title: CBtActionCombatPositioning
---

# Interface CBtActionCombatPositioning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBtActionCombatPositioning : CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtActionCombatPositioning>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBtNode](/docs/api/schemadefinitions/cbtnode)
- [ISchemaClass<CBtNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBtActionCombatPositioning>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActionTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L22)

```csharp
CountdownTimer ActionTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Crouching

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L24)

```csharp
ref bool Crouching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAttackingKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L20)

```csharp
string IsAttackingKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SensorInputKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L18)

```csharp
string SensorInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

