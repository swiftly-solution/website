---
title: CStrongHandle<T>
---

```csharp
public struct CStrongHandle<T> where T : INativeHandle, ISchemaClass<T>
```

#### Type Parameters

- **T**: 

#### Inherited Members

## Properties

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CStrongHandle.cs#L18)

```csharp
public readonly bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CStrongHandle.cs#L20)

```csharp
public readonly T Value { get; }
```

#### Property Value

- T

