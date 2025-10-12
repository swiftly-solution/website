---
title: CBtNodeConditionInactive
---

```csharp
public interface CBtNodeConditionInactive : CBtNodeCondition, CBtNodeDecorator, CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtNodeDecorator>, ISchemaClass<CBtNodeCondition>, ISchemaClass<CBtNodeConditionInactive>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### RoundStartThresholdSeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtNodeConditionInactive.cs#L16)

```csharp
ref float RoundStartThresholdSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SensorInactivityThresholdSeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtNodeConditionInactive.cs#L18)

```csharp
ref float SensorInactivityThresholdSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SensorInactivityTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtNodeConditionInactive.cs#L20)

```csharp
CountdownTimer SensorInactivityTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

