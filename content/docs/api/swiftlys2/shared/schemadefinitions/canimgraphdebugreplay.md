---
title: CAnimGraphDebugReplay
---

```csharp
public interface CAnimGraphDebugReplay : ISchemaClass<CAnimGraphDebugReplay>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnimGraphFileName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimGraphDebugReplay.cs#L16)

```csharp
string AnimGraphFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**FrameCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimGraphDebugReplay.cs#L25)

```csharp
ref int FrameCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**FrameList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimGraphDebugReplay.cs#L19)

```csharp
ref CUtlVector FrameList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**StartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimGraphDebugReplay.cs#L21)

```csharp
ref int StartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**WriteIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimGraphDebugReplay.cs#L23)

```csharp
ref int WriteIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

