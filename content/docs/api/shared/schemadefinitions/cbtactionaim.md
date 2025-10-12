---
title: CBtActionAim
---

```csharp
public interface CBtActionAim : CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtActionAim>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Acquired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L38)

```csharp
ref bool Acquired { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AimReadyKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L18)

```csharp
string AimReadyKey { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **AimTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L32)

```csharp
CountdownTimer AimTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **DoneAiming** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L22)

```csharp
ref bool DoneAiming { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FocusIntervalTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L36)

```csharp
CountdownTimer FocusIntervalTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **LerpStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L24)

```csharp
ref float LerpStartTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NextLookTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L30)

```csharp
ref QAngle NextLookTarget { get; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **NextLookTargetLerpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L26)

```csharp
ref float NextLookTargetLerpTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **PenaltyReductionRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L28)

```csharp
ref float PenaltyReductionRatio { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SensorInputKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L16)

```csharp
string SensorInputKey { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SniperHoldTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L34)

```csharp
CountdownTimer SniperHoldTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **ZoomCooldownTimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionAim.cs#L20)

```csharp
ref float ZoomCooldownTimestamp { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

