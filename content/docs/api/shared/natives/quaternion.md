---
title: Quaternion
---

```csharp
public struct Quaternion
```

#### Inherited Members

## Constructors

### **Quaternion(float, float, float, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L17)

```csharp
public Quaternion(float ix, float iy, float iz, float iw)
```

#### Parameters

- **ix**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **iy**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **iz**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **iw**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Quaternion(Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L25)

```csharp
public Quaternion(Quaternion other)
```

#### Parameters

- **other**: [Quaternion](/docs/api/shared/natives/quaternion)

## Fields

### **W** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L15)

```csharp
public float W
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **X** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L12)

```csharp
public float X
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L13)

```csharp
public float Y
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Z** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L14)

```csharp
public float Z
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### **One** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L49)

```csharp
public static Quaternion One { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### **Zero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L47)

```csharp
public static Quaternion Zero { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

## Methods

### **Equals(object?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L43)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### **FromBuiltin(Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L38)

```csharp
public static Quaternion FromBuiltin(Quaternion quaternion)
```

#### Parameters

- **quaternion**: [Quaternion](https://learn.microsoft.com/dotnet/api/system.numerics.quaternion)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L44)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### **ToBuiltin()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L33)

```csharp
public Quaternion ToBuiltin()
```

#### Returns

- [Quaternion](https://learn.microsoft.com/dotnet/api/system.numerics.quaternion)

### **ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L45)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### **operator +(Quaternion, Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L52)

```csharp
public static Quaternion operator +(Quaternion a, Quaternion b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **operator /(Quaternion, Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L59)

```csharp
public static Quaternion operator /(Quaternion a, Quaternion b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **operator /(Quaternion, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L65)

```csharp
public static Quaternion operator /(Quaternion a, float b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **operator ==(Quaternion, Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L79)

```csharp
public static bool operator ==(Quaternion a, Quaternion b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator !=(Quaternion, Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L82)

```csharp
public static bool operator !=(Quaternion a, Quaternion b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator *(Quaternion, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L62)

```csharp
public static Quaternion operator *(Quaternion a, float b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **operator -(Quaternion, Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L56)

```csharp
public static Quaternion operator -(Quaternion a, Quaternion b)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)
- **b**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

### **operator -(Quaternion)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Quaternion.cs#L76)

```csharp
public static Quaternion operator -(Quaternion a)
```

#### Parameters

- **a**: [Quaternion](/docs/api/shared/natives/quaternion)

#### Returns

- [Quaternion](/docs/api/shared/natives/quaternion)

