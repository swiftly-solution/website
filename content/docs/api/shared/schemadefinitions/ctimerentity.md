---
title: CTimerEntity
---

```csharp
public interface CTimerEntity : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CTimerEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Disabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L23)

```csharp
ref int Disabled { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitialDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L25)

```csharp
ref float InitialDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LowerRandomBound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L35)

```csharp
ref float LowerRandomBound { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L17)

```csharp
CEntityIOOutput OnTimer { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnTimerHigh

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L19)

```csharp
CEntityIOOutput OnTimerHigh { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnTimerLow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L21)

```csharp
CEntityIOOutput OnTimerLow { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PauseAfterFiring

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L33)

```csharp
ref bool PauseAfterFiring { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Paused

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L41)

```csharp
ref bool Paused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RefireTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L27)

```csharp
ref float RefireTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RemainingTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L39)

```csharp
ref float RemainingTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UpDownState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L29)

```csharp
ref bool UpDownState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpperRandomBound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L37)

```csharp
ref float UpperRandomBound { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseRandomTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L31)

```csharp
ref int UseRandomTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

