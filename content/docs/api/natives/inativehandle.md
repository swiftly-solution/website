---
title: INativeHandle
---

# Interface INativeHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/INativeHandle.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

Native handle from swiftly c++ native side, either allocated or borrowed from game.

```csharp
public interface INativeHandle
```

## Properties

### Address

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/INativeHandle.cs#L22)

Dangerous method to get the memory address of the object

```csharp
nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### IsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/INativeHandle.cs#L16)

Return whether a handle is valid. 
Still might be dangerous for some pointer that borrowed from game instead of allocated by ourselves.

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

