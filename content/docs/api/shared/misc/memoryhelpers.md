---
title: MemoryHelpers
---

```csharp
public static class MemoryHelpers
```

#### Inheritance

#### Inherited Members

## Methods

### CalcNewDoublingCount(int, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Misc/MemoryHelpers.cs#L8)

```csharp
public static int CalcNewDoublingCount(int oldCount, int requestedCount, int minCount, int maxCount)
```

#### Parameters

- **oldCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **requestedCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **minCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **maxCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShiftElementsLeft(nint, int, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Misc/MemoryHelpers.cs#L39)

```csharp
public static void ShiftElementsLeft(nint memory, int elem, int num, int size, int elementSize)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **elementSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShiftElementsRight(nint, int, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Misc/MemoryHelpers.cs#L30)

```csharp
public static void ShiftElementsRight(nint memory, int elem, int num, int size, int elementSize)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **elementSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

