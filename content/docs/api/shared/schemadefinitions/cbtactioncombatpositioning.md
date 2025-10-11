---
title: CBtActionCombatPositioning
---

```csharp
public interface CBtActionCombatPositioning : CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtActionCombatPositioning>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ActionTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L20)

```csharp
CountdownTimer ActionTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **Crouching** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L22)

```csharp
ref bool Crouching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsAttackingKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L18)

```csharp
string IsAttackingKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SensorInputKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionCombatPositioning.cs#L16)

```csharp
string SensorInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

