---
title: InteropHelp.UTF8StringHandle
---

```csharp
public class InteropHelp.UTF8StringHandle : SafeHandleZeroOrMinusOneIsInvalid, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### UTF8StringHandle(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L12)

```csharp
public UTF8StringHandle(string str)
```

#### Parameters

- **str**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ReleaseHandle()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L30)

```csharp
protected override bool ReleaseHandle()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the handle is released successfully; otherwise, in the event of a catastrophic failure, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. In this case, it generates a releaseHandleFailed Managed Debugging Assistant.

