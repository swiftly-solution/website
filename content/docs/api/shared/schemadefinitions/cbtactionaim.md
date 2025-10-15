---
title: CBtActionAim
---

```csharp
public interface CBtActionAim : CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtActionAim>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Acquired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L39)

```csharp
ref bool Acquired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AimReadyKey

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L19)

```csharp
string AimReadyKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AimTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L33)

```csharp
CountdownTimer AimTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### DoneAiming

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L23)

```csharp
ref bool DoneAiming { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FocusIntervalTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L37)

```csharp
CountdownTimer FocusIntervalTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### LerpStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L25)

```csharp
ref float LerpStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextLookTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L31)

```csharp
ref QAngle NextLookTarget { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### NextLookTargetLerpTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L27)

```csharp
ref float NextLookTargetLerpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PenaltyReductionRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L29)

```csharp
ref float PenaltyReductionRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SensorInputKey

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L17)

```csharp
string SensorInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SniperHoldTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L35)

```csharp
CountdownTimer SniperHoldTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### ZoomCooldownTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L21)

```csharp
ref float ZoomCooldownTimestamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

