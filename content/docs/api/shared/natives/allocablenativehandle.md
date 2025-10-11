---
title: AllocableNativeHandle
---

```csharp
public abstract class AllocableNativeHandle : SafeHandleZeroOrMinusOneIsInvalid, IDisposable, INativeHandle
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### **AllocableNativeHandle(nint, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L11)

```csharp
protected AllocableNativeHandle(nint handle, bool ownsHandle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **ownsHandle**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### **Address** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L15)

```csharp
public nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### **IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L9)

```csharp
public bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **Free()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L17)

```csharp
protected abstract bool Free()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ReleaseHandle()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/AllocableNativeHandle.cs#L19)

```csharp
protected override bool ReleaseHandle()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the handle is released successfully; otherwise, in the event of a catastrophic failure, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. In this case, it generates a releaseHandleFailed Managed Debugging Assistant.

