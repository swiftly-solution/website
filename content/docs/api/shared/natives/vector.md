---
title: Vector
---

```csharp
public struct Vector
```

- Inherited Members

## Constructors

### **Vector(float, float, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L18)

```csharp
public Vector(float x, float y, float z)
```

- Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Vector(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L24)

```csharp
public Vector(Vector other)
```

- Parameters

- **other**: [Vector](/docs/api/shared/natives/vector)

## Fields

### **X** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L14)

```csharp
public float X
```

- Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L15)

```csharp
public float Y
```

- Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Z** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L16)

```csharp
public float Z
```

- Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### **One** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L98)

```csharp
public static Vector One { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Zero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L96)

```csharp
public static Vector Zero { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

## Methods

### **Cross(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L55)

```csharp
public Vector Cross(Vector other)
```

- Parameters

- **other**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **Deconstruct(out float, out float, out float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L85)

```csharp
public void Deconstruct(out float x, out float y, out float z)
```

- Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Distance(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L47)

```csharp
public float Distance(Vector other)
```

- Parameters

- **other**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DistanceSquared(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L51)

```csharp
public float DistanceSquared(Vector other)
```

- Parameters

- **other**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Dot(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L58)

```csharp
public static float Dot(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Dot(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L61)

```csharp
public float Dot(Vector other)
```

- Parameters

- **other**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Equals(object?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L92)

```csharp
public override bool Equals(object? obj)
```

- Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### **FromBuiltin(Vector3)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L35)

```csharp
public static Vector FromBuiltin(Vector3 vector)
```

- Parameters

- **vector**: [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L93)

```csharp
public override int GetHashCode()
```

- Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### **Length()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L40)

```csharp
public float Length()
```

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LengthSquared()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L44)

```csharp
public float LengthSquared()
```

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Normalize()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L64)

```csharp
public void Normalize()
```

### **Normalized()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L75)

```csharp
public Vector Normalized()
```

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **ToBuiltin()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L30)

```csharp
public Vector3 ToBuiltin()
```

- Returns

- [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### **ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L94)

```csharp
public override string ToString()
```

- Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### **operator +(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L101)

```csharp
public static Vector operator +(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator /(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L111)

```csharp
public static Vector operator /(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator /(Vector, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L120)

```csharp
public static Vector operator /(Vector a, float b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator ==(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L132)

```csharp
public static bool operator ==(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator !=(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L135)

```csharp
public static bool operator !=(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator *(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L108)

```csharp
public static Vector operator *(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator *(Vector, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L114)

```csharp
public static Vector operator *(Vector a, float b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator *(float, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L117)

```csharp
public static Vector operator *(float b, Vector a)
```

- Parameters

- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **a**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator -(Vector, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L105)

```csharp
public static Vector operator -(Vector a, Vector b)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)
- **b**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **operator -(Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L129)

```csharp
public static Vector operator -(Vector a)
```

- Parameters

- **a**: [Vector](/docs/api/shared/natives/vector)

- Returns

- [Vector](/docs/api/shared/natives/vector)

