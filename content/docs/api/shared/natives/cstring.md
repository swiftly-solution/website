---
title: CString
---

```csharp
public struct CString
```

#### Inherited Members

## Properties

### **Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CString.cs#L19)

```csharp
public string Value { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### **implicit operator string(CString)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CString.cs#L33)

```csharp
public static implicit operator string(CString str)
```

#### Parameters

- **str**: [CString](/docs/api/shared/natives/cstring)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **implicit operator CString(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CString.cs#L34)

```csharp
public static implicit operator CString(string str)
```

#### Parameters

- **str**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [CString](/docs/api/shared/natives/cstring)

