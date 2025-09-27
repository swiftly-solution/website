---
title: INativeHandle
---

```csharp
public interface INativeHandle
```

## Properties

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/INativeHandle.cs#L16)

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**GetHandle()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/INativeHandle.cs#L22)

```csharp
nint GetHandle()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The raw handle.

