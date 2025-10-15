---
title: CPlayer_MovementServices
---

```csharp
public interface CPlayer_MovementServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ButtonDoublePressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L25)

```csharp
ref ulong ButtonDoublePressed { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ButtonPressedCmdNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L27)

```csharp
ISchemaFixedArray<uint> ButtonPressedCmdNumber { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Buttons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L19)

```csharp
CInButtonState Buttons { get; }
```

#### Property Value

- [CInButtonState](/docs/api/shared/schemadefinitions/cinbuttonstate)

### ForceSubtickMoveWhen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L35)

```csharp
ISchemaFixedArray<float> ForceSubtickMoveWhen { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### ForwardMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L37)

```csharp
ref float ForwardMove { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Impulse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L17)

```csharp
ref int Impulse { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastCommandNumberProcessed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L29)

```csharp
ref uint LastCommandNumberProcessed { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LastMovementImpulses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L43)

```csharp
ref Vector LastMovementImpulses { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LeftMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L39)

```csharp
ref float LeftMove { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Maxspeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L33)

```csharp
ref float Maxspeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldViewAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L45)

```csharp
ref QAngle OldViewAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### QueuedButtonChangeMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L23)

```csharp
ref ulong QueuedButtonChangeMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### QueuedButtonDownMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L21)

```csharp
ref ulong QueuedButtonDownMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ToggleButtonDownMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L31)

```csharp
ref ulong ToggleButtonDownMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UpMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L41)

```csharp
ref float UpMove { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ForceSubtickMoveWhenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L49)

```csharp
void ForceSubtickMoveWhenUpdated()
```

### MaxspeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L48)

```csharp
void MaxspeedUpdated()
```

### ToggleButtonDownMaskUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices.cs#L47)

```csharp
void ToggleButtonDownMaskUpdated()
```

