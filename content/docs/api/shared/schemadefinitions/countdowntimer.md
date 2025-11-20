---
title: CountdownTimer
---

```csharp
public interface CountdownTimer : ISchemaClass<CountdownTimer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L18)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Timescale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L22)

```csharp
ref float Timescale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Timestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L20)

```csharp
GameTime_t Timestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### WorldGroupId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L24)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### DurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L26)

```csharp
void DurationUpdated()
```

### TimescaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L28)

```csharp
void TimescaleUpdated()
```

### TimestampUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L27)

```csharp
void TimestampUpdated()
```

### WorldGroupIdUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CountdownTimer.cs#L29)

```csharp
void WorldGroupIdUpdated()
```

