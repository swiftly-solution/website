---
title: CNmEvent
---

```csharp
public interface CNmEvent : ISchemaClass<CNmEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ClientOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmEvent.cs#L23)

```csharp
ref bool ClientOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DurationSeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmEvent.cs#L19)

```csharp
ref float DurationSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartTimeSeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmEvent.cs#L17)

```csharp
ref float StartTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SyncID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmEvent.cs#L21)

```csharp
ref CGlobalSymbol SyncID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

